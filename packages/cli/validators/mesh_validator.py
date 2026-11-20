"""Validador mesh_validator — Valida descritores MeSH da NLM/NIH."""
from __future__ import annotations
from typing import Any
from packages.cli.validators.base import BaseValidator
from packages.cli.validators.registry import register


import re
_CODE = re.compile(r"^D[0-9]{6}$")

def _check(item):
    codigo = item.get("codigo") if isinstance(item, dict) else None
    if not isinstance(codigo, str) or not codigo.strip():
        return False, "codigo ausente"
    if _CODE.match(codigo):
        return True, None
    return False, "descritor MeSH invalido"


@register
class CLASS_mesh_validator(BaseValidator):
    mesh_validator = "mesh_validator"
    VERSION = "1.0.0"

    @property
    def name(self) -> str:
        return self.mesh_validator

    @property
    def version(self) -> str:
        return self.VERSION

    def validate(self, item: dict[str, Any]) -> tuple[bool, str | None]:
        return _check(item)

    def validate_batch(self, items: list[dict[str, Any]]) -> list[tuple[dict, bool, str | None]]:
        return [(item, *self.validate(item)) for item in items]

    def test_suite(self) -> list[tuple[dict, bool, str]]:
        return [
            ({"codigo": "D000001"}, True, "descritor"),
            ({"codigo": "D001234"}, True, "outro"),
            ({"codigo": "D012345"}, True, "terceiro"),
            ({"codigo": "D065432"}, True, "quarto"),
            ({"codigo": "D999999"}, True, "quinto"),
            ({"codigo": ""}, False, "vazio"),
            ({"codigo": "A00"}, False, "cid"),
            ({}, False, "item vazio"),
            ({"codigo": "D12345"}, False, "curto"),
            ({"descricao": "Sem codigo"}, False, "sem codigo"),
            ({"codigo": "d000001"}, False, "minusculo"),
        ]

