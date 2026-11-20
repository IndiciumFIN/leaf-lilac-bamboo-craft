"""Leitura offline de página já salva do Diário Oficial.

O arquivo anterior importava BeautifulSoup e pedia a página na rede.
Nenhum dos dois está disponível nem é aceito aqui. O texto sai pelo
extrator do piloto COFEN/COREN, que já existia e não depende de biblioteca
externa. A saída não declara vigência.
"""
from __future__ import annotations

import importlib.util
from pathlib import Path

from packages.cli.parsers.coso import ParseHold, cravar, exigir_texto, saida

EDICOES = frozenset({"cofen_dou", "anvisa_dou", "lei_federal", "ms_portarias"})
_PILOTO = None


def _piloto():
    global _PILOTO
    if _PILOTO is None:
        caminho = Path(__file__).resolve().parents[3] / "pilots/cko-cofen-cor/automatizacao/cko_pilot.py"
        spec = importlib.util.spec_from_file_location("cko_pilot_dou", caminho)
        if spec is None or spec.loader is None:
            raise ParseHold("piloto COFEN/COREN ausente")
        modulo = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(modulo)
        _PILOTO = modulo
    return _PILOTO


def parse(raw, *, source_id, document_id, edition, expected_sha256):
    fonte = exigir_texto(source_id, "source_id")
    documento = exigir_texto(document_id, "document_id")
    if edition not in EDICOES:
        raise ParseHold("edicao fora dos quatro diarios contratados")
    carga, digest = cravar(raw, expected_sha256)
    try:
        html = carga.decode("utf-8")
    except UnicodeError as exc:
        raise ParseHold("pagina do diario nao esta em utf-8") from exc
    texto = _piloto().html_to_text(html).strip()
    if len(texto) < 20 or len(texto) > 40_000:
        raise ParseHold("texto do diario vazio ou acima do corte")
    return [saida(
        {"edition": edition, "caracteres": len(texto), "texto_sha256": _piloto().sha256_text(texto)},
        digest=digest, fonte=fonte, documento=documento,
        contrato=f"contracts/fontes/{edition}.json", parser="dou", edicao=edition,
    )]


def fetch_dou_federal(url: str) -> dict:
    """A CLI antiga pedia a página na rede. Este adaptador não busca URL."""
    raise RuntimeError("busca de rede recusada; entregue os bytes pinçados a parse()")
