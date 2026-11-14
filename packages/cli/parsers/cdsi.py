"""Esquema vacinal candidato do calendário do PNI. Não indica dose.

A política KERNEL-POLICY-018 não exige hash. O controle aplicado exige.
O texto da idade e da dose é rótulo da fonte, não prescrição.
"""
from __future__ import annotations

from packages.cli.parsers.coso import ParseHold, cravar, exigir_texto, ler_envelope, saida

CONTRATO = "contracts/fontes/cdsi.json"
PARSER = "cdsi"
EDICAO = "pni-calendario"


def parse(raw, *, source_id, document_id, edition, expected_sha256):
    fonte = exigir_texto(source_id, "source_id")
    documento = exigir_texto(document_id, "document_id")
    if edition != EDICAO:
        raise ParseHold("so o calendario pni-calendario e aceito")
    carga, digest = cravar(raw, expected_sha256)
    envelope = ler_envelope(carga)
    vistos = set()
    saidas = []
    for n, linha in enumerate(envelope["records"], 1):
        if not isinstance(linha, dict):
            raise ParseHold(f"linha {n}: registro invalido")
        if set(linha) - {"imunobiologico", "idade", "dose"}:
            raise ParseHold(f"linha {n}: campo fora do rotulo")
        imunobiologico = exigir_texto(linha.get("imunobiologico"), "imunobiologico", 120)
        idade = exigir_texto(linha.get("idade"), "idade", 80)
        dose = exigir_texto(linha.get("dose"), "dose", 80)
        chave = (imunobiologico, idade, dose)
        if chave in vistos:
            raise ParseHold(f"linha {n}: esquema repetido")
        vistos.add(chave)
        saidas.append(saida(
            {"imunobiologico": imunobiologico, "idade": idade, "dose_rotulo": dose},
            digest=digest, fonte=fonte, documento=documento,
            contrato=CONTRATO, parser=PARSER, edicao=edition,
        ))
    return saidas
