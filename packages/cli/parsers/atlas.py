"""Índice anatômico candidato do BodyParts3D. Não lê malha e não ensina anatomia.

A política KERNEL-POLICY-017 não exige hash. O controle aplicado exige.
Arquivo binário de malha (VTK, STL, ZIP) é recusado.
"""
from __future__ import annotations

import re

from packages.cli.parsers.coso import ParseHold, cravar, exigir_texto, ler_envelope, saida

CONTRATO = "contracts/fontes/atlas.json"
PARSER = "atlas"
EDICAO = "bodyparts3d-fma"
FMA = re.compile(r"FMA[0-9]{1,7}", re.ASCII)
REPRESENTACAO = re.compile(r"[A-Za-z0-9_-]{1,64}", re.ASCII)


def parse(raw, *, source_id, document_id, edition, expected_sha256):
    fonte = exigir_texto(source_id, "source_id")
    documento = exigir_texto(document_id, "document_id")
    if edition != EDICAO:
        raise ParseHold("so o indice bodyparts3d-fma e aceito")
    carga, digest = cravar(raw, expected_sha256)
    if carga.startswith((b"solid", b"# vtk", b"PK\x03\x04")):
        raise ParseHold("malha anatomica nao e indice")
    envelope = ler_envelope(carga)
    vistos = set()
    saidas = []
    for n, linha in enumerate(envelope["records"], 1):
        if not isinstance(linha, dict):
            raise ParseHold(f"linha {n}: registro invalido")
        fma = exigir_texto(linha.get("fma_id"), "fma_id", 12)
        representacao = exigir_texto(linha.get("representation_id"), "representation_id", 64)
        if not FMA.fullmatch(fma) or not REPRESENTACAO.fullmatch(representacao):
            raise ParseHold(f"linha {n}: identificador anatomico invalido")
        if fma in vistos:
            raise ParseHold(f"linha {n}: FMA repetido")
        vistos.add(fma)
        if set(linha) - {"fma_id", "representation_id"}:
            raise ParseHold(f"linha {n}: campo fora do indice")
        saidas.append(saida(
            {"fma_id": fma, "representation_id": representacao},
            digest=digest, fonte=fonte, documento=documento,
            contrato=CONTRATO, parser=PARSER, edicao=edition,
        ))
    return saidas
