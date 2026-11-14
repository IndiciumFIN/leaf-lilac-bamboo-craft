"""Agregado público do SINAN. A ficha individual de notificação é recusada.

KERNEL-POLICY-011 já exige hash e revisão de enfermeiro. O parser não
entrega essa revisão: a saída permanece em espera. UF, ano, CID e casos
não identificam pessoa e não fecham surto.
"""
from __future__ import annotations

import re

from packages.cli.parsers.coso import ParseHold, cravar, exigir_texto, ler_envelope, saida

CONTRATO = "contracts/fontes/sinan.json"
PARSER = "sinan"
EDICAO = "datasus-sinan-agregado"
UF = re.compile(r"[A-Z]{2}", re.ASCII)
CID = re.compile(r"[A-Z][0-9]{2}(\.[0-9]{1,2})?", re.ASCII)


def parse(raw, *, source_id, document_id, edition, expected_sha256):
    fonte = exigir_texto(source_id, "source_id")
    documento = exigir_texto(document_id, "document_id")
    if edition != EDICAO:
        raise ParseHold("so o agregado datasus-sinan-agregado e aceito")
    carga, digest = cravar(raw, expected_sha256)
    envelope = ler_envelope(carga)
    vistos = set()
    saidas = []
    for n, linha in enumerate(envelope["records"], 1):
        if not isinstance(linha, dict):
            raise ParseHold(f"linha {n}: registro invalido")
        if set(linha) - {"ano", "uf", "cid", "casos"}:
            raise ParseHold(f"linha {n}: campo fora do agregado")
        ano = linha.get("ano")
        if isinstance(ano, bool) or not isinstance(ano, int) or ano < 1990 or ano > 2100:
            raise ParseHold(f"linha {n}: ano invalido")
        uf = exigir_texto(linha.get("uf"), "uf", 2)
        cid = exigir_texto(linha.get("cid"), "cid", 8)
        if not UF.fullmatch(uf) or not CID.fullmatch(cid):
            raise ParseHold(f"linha {n}: uf ou cid invalido")
        casos = linha.get("casos")
        if isinstance(casos, bool) or not isinstance(casos, int) or casos < 0:
            raise ParseHold(f"linha {n}: casos invalidos")
        chave = (ano, uf, cid)
        if chave in vistos:
            raise ParseHold(f"linha {n}: agregado repetido")
        vistos.add(chave)
        saidas.append(saida(
            {"ano": ano, "uf": uf, "cid": cid, "casos": casos},
            digest=digest, fonte=fonte, documento=documento,
            contrato=CONTRATO, parser=PARSER, edicao=edition,
        ))
    return saidas
