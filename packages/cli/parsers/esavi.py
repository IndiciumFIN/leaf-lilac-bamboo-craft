"""Agregado de ESAVI. Notificação individual da ANVISA é recusada.

A política KERNEL-POLICY-014 não exige hash nem revisão humana.
LGPD e o controle aplicado exigem os dois: sem identificador e sem publicação.
O número de eventos não é taxa e não atribui causalidade.
"""
from __future__ import annotations

from packages.cli.parsers.coso import ParseHold, cravar, exigir_texto, ler_envelope, saida

CONTRATO = "contracts/fontes/esavi.json"
PARSER = "esavi"
EDICAO = "anvisa-esavi-agregado"


def _contagem(valor, nome):
    if isinstance(valor, bool) or not isinstance(valor, int) or valor < 0 or valor > 1_000_000_000:
        raise ParseHold(f"{nome}: contagem inteira nao negativa")
    return valor


def parse(raw, *, source_id, document_id, edition, expected_sha256):
    fonte = exigir_texto(source_id, "source_id")
    documento = exigir_texto(document_id, "document_id")
    if edition != EDICAO:
        raise ParseHold("so o agregado anvisa-esavi-agregado e aceito")
    carga, digest = cravar(raw, expected_sha256)
    envelope = ler_envelope(carga)
    saidas = []
    for n, linha in enumerate(envelope["records"], 1):
        if not isinstance(linha, dict):
            raise ParseHold(f"linha {n}: registro invalido")
        if set(linha) - {"ano", "imunobiologico", "eventos", "graves"}:
            raise ParseHold(f"linha {n}: campo fora do agregado")
        ano = linha.get("ano")
        if isinstance(ano, bool) or not isinstance(ano, int) or ano < 1990 or ano > 2100:
            raise ParseHold(f"linha {n}: ano invalido")
        imunobiologico = exigir_texto(linha.get("imunobiologico"), "imunobiologico", 120)
        eventos = _contagem(linha.get("eventos"), "eventos")
        graves = _contagem(linha.get("graves"), "graves")
        if graves > eventos:
            raise ParseHold(f"linha {n}: graves acima do total")
        saidas.append(saida(
            {"ano": ano, "imunobiologico": imunobiologico, "eventos": eventos, "graves": graves},
            digest=digest, fonte=fonte, documento=documento,
            contrato=CONTRATO, parser=PARSER, edicao=edition,
        ))
    return saidas
