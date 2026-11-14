"""Controles de leitura. Não certifica COSO e não homologa fonte.

O quadro aplicado é o de controle interno do COSO (2013), no recorte
publicado para sistemas com inteligência artificial: ambiente, avaliação
de risco, atividade de controle, informação e monitoramento. A LGPD
(Lei 13.709/2018) entra como limite para dado pessoal sensível. Nenhuma
saída autoriza decisão clínica, publicação ou admissão.
"""
from __future__ import annotations

import hashlib
import json
import re

SHA_RE = re.compile(r"[0-9a-f]{64}", re.ASCII)
MAX_RAW_BYTES = 2_000_000
IDENTIFICADORES = frozenset({
    "cpf", "nu_cpf", "cns", "id_cns", "nu_cartao", "cartao_sus",
    "nome", "nome_paciente", "nm_pacient", "nm_mae", "nome_mae",
    "endereco", "nm_logrado", "logradouro", "telefone", "nu_telefon",
    "email", "data_nascimento", "dt_nasc", "nascimento",
})


class ParseHold(ValueError):
    """Lote rejeitado por inteiro. Não há registro parcial."""


def exigir_texto(valor, nome, limite=256):
    if not isinstance(valor, str) or not valor.strip() or len(valor) > limite:
        raise ParseHold(f"{nome}: texto explicito e limitado")
    texto = valor.strip()
    if any(ord(c) < 32 for c in texto):
        raise ParseHold(f"{nome}: caractere de controle")
    return texto


def cravar(bruto, esperado):
    if not isinstance(bruto, (bytes, str)):
        raise ParseHold("o lote tem de ser bytes ou texto")
    carga = bruto.encode("utf-8") if isinstance(bruto, str) else bruto
    if not carga or len(carga) > MAX_RAW_BYTES or b"\0" in carga:
        raise ParseHold("lote vazio, grande demais ou binario")
    if not isinstance(esperado, str) or not SHA_RE.fullmatch(esperado):
        raise ParseHold("expected_sha256 tem de ser o digest em minusculas")
    digest = hashlib.sha256(carga).hexdigest()
    if digest != esperado:
        raise ParseHold("o hash do snapshot nao confere")
    return carga, digest


def ler_envelope(carga):
    try:
        dado = json.loads(carga.decode("utf-8"))
    except (UnicodeError, json.JSONDecodeError) as exc:
        raise ParseHold("envelope JSON invalido") from exc
    if not isinstance(dado, dict) or not isinstance(dado.get("records"), list):
        raise ParseHold("o envelope exige a lista records")
    if not dado["records"] or len(dado["records"]) > 5000:
        raise ParseHold("a lista records esta vazia ou passa do limite")
    _recusar_identificador(dado)
    return dado


def _recusar_identificador(valor):
    if isinstance(valor, dict):
        for chave, item in valor.items():
            if str(chave).strip().lower() in IDENTIFICADORES:
                raise ParseHold("dado pessoal identificavel recusado")
            _recusar_identificador(item)
    elif isinstance(valor, list):
        for item in valor:
            _recusar_identificador(item)


def saida(registro, *, digest, fonte, documento, contrato, parser, edicao):
    corpo = json.dumps(registro, sort_keys=True, separators=(",", ":"), ensure_ascii=False)
    return {
        **registro,
        "record_sha256": hashlib.sha256(corpo.encode("utf-8")).hexdigest(),
        "source_sha256": digest,
        "source_id": fonte,
        "document_id": documento,
        "source_contract": contrato,
        "parser": parser,
        "parser_version": "1.0.0",
        "edition_declared": edicao,
        "control_framework": "COSO-IC-2013+COSO-AI",
        "control_components": [
            "ambiente",
            "avaliacao_de_risco",
            "atividade_de_controle",
            "informacao",
            "monitoramento",
        ],
        "source_origin_verified": False,
        "rights_verified": False,
        "clinical_approved": False,
        "publication_allowed": False,
        "release_allowed": False,
        "status": "HOLD_HUMAN",
    }
