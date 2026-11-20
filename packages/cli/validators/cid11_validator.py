"""Validador cid11_validator — Valida codigos CID-11 OMS (codigo com letras e numeros)."""
from __future__ import annotations
from typing import Any
from packages.cli.validators.base import BaseValidator
from packages.cli.validators.registry import register


import re
_CODE = re.compile(r"^(?=[A-Z0-9]*[0-9])[A-Z0-9]{4}(?:\.[A-Z0-9]{1,4})?$")

def _check(item):
    codigo = item.get("codigo") if isinstance(item, dict) else None
    if not isinstance(codigo, str) or not codigo.strip():
        return False, "codigo ausente"
    if _CODE.match(codigo):
        return True, None
    return False, "codigo CID-11 invalido"


@register
class CLASS_cid11_validator(BaseValidator):
    cid11_validator = "cid11_validator"
    VERSION = "1.0.0"

    @property
    def name(self) -> str:
        return self.cid11_validator

    @property
    def version(self) -> str:
        return self.VERSION

    def validate(self, item: dict[str, Any]) -> tuple[bool, str | None]:
        return _check(item)

    def validate_batch(self, items: list[dict[str, Any]]) -> list[tuple[dict, bool, str | None]]:
        return [(item, *self.validate(item)) for item in items]

    def test_suite(self) -> list[tuple[dict, bool, str]]:
        return [
            ({"codigo": "1A00", "descricao": "stem"}, True, "stem"),
            ({"codigo": "CA40", "descricao": "letra"}, True, "letra inicial de bloco"),
            ({"codigo": "1A00.0", "descricao": "extensao"}, True, "extensao"),
            ({"codigo": "8B20", "descricao": "outro"}, True, "outro stem"),
            ({"codigo": "MD11", "descricao": "bloco"}, True, "bloco"),
            ({"codigo": ""}, False, "codigo vazio"),
            ({"codigo": "A00"}, False, "formato CID-10"),
            ({}, False, "item vazio"),
            ({"codigo": "123"}, False, "so numeros curtos"),
            ({"descricao": "Sem codigo"}, False, "sem campo codigo"),
            ({"codigo": "AA"}, False, "curto"),
        ]

