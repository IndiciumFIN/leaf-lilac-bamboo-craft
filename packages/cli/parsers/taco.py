"""Nutriente candidato da TACO. A descrição do alimento não sai do parser.

KERNEL-POLICY-010 não exige hash. O controle aplicado exige. O número não
é prescrição dietética e o direito da tabela da UNICAMP não foi verificado.
"""
from __future__ import annotations

import re

from packages.cli.parsers.coso import ParseHold, cravar, exigir_texto, ler_envelope, saida

CONTRATO = "contracts/fontes/taco.json"
PARSER = "taco"
EDICAO = "taco-4"
NUMERO = re.compile(r"[0-9]{1,5}", re.ASCII)
NUTRIENTES = frozenset({
    "umidade_g", "energia_kcal", "energia_kj", "proteina_g", "lipideos_g",
    "colesterol_mg", "carboidrato_g", "fibra_g", "cinzas_g", "calcio_mg",
    "magnesio_mg", "manganes_mg", "fosforo_mg", "ferro_mg", "sodio_mg",
    "potassio_mg", "cobre_mg", "zinco_mg", "retinol_mcg", "tiamina_mg",
    "riboflavina_mg", "niacina_mg", "vitamina_c_mg",
})
AUSENTE = frozenset({"NA", "Tr"})


def _nutriente(valor, nome):
    if valor in AUSENTE or valor is None:
        return None
    if isinstance(valor, bool) or not isinstance(valor, (int, float)):
        raise ParseHold(f"{nome}: numero, NA, Tr ou nulo")
    if valor < 0 or valor > 100_000:
        raise ParseHold(f"{nome}: fora da faixa")
    return valor


def parse(raw, *, source_id, document_id, edition, expected_sha256):
    fonte = exigir_texto(source_id, "source_id")
    documento = exigir_texto(document_id, "document_id")
    if edition != EDICAO:
        raise ParseHold("so a edicao taco-4 e aceita")
    carga, digest = cravar(raw, expected_sha256)
    envelope = ler_envelope(carga)
    vistos = set()
    saidas = []
    for n, linha in enumerate(envelope["records"], 1):
        if not isinstance(linha, dict):
            raise ParseHold(f"linha {n}: registro invalido")
        if "descricao" in linha or "descricao_alimento" in linha:
            raise ParseHold(f"linha {n}: descricao nao entra")
        numero = exigir_texto(str(linha.get("numero", "")), "numero", 5)
        if not NUMERO.fullmatch(numero) or numero in vistos:
            raise ParseHold(f"linha {n}: numero invalido ou repetido")
        vistos.add(numero)
        extras = set(linha) - {"numero"} - NUTRIENTES
        if extras:
            raise ParseHold(f"linha {n}: nutriente desconhecido")
        medidas = {}
        for nome in NUTRIENTES:
            if nome in linha:
                medidas[nome] = _nutriente(linha[nome], nome)
        if not medidas:
            raise ParseHold(f"linha {n}: sem nutriente")
        saidas.append(saida(
            {"numero": numero, "nutrientes": medidas},
            digest=digest, fonte=fonte, documento=documento,
            contrato=CONTRATO, parser=PARSER, edicao=edition,
        ))
    return saidas
