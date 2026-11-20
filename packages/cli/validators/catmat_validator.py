"""Validador catmat_validator — Valida codigos CATMAT de compras publicas."""
from __future__ import annotations
from typing import Any
from packages.cli.validators.base import BaseValidator
from packages.cli.validators.registry import register


import re
_CODE = re.compile(r"^[0-9]{6,12}$")

def _check(item):
    codigo = item.get("codigo") if isinstance(item, dict) else None
    if not isinstance(codigo, str) or not codigo.strip():
        return False, "codigo ausente"
    if _CODE.match(codigo):
        return True, None
    return False, "CATMAT invalido"


@register
class CLASS_catmat_validator(BaseValidator):
    catmat_validator = "catmat_validator"
    VERSION = "1.0.0"

    @property
    def name(self) -> str:
        return self.catmat_validator

    @property
    def version(self) -> str:
        return self.VERSION

    def validate(self, item: dict[str, Any]) -> tuple[bool, str | None]:
        return _check(item)

    def validate_batch(self, items: list[dict[str, Any]]) -> list[tuple[dict, bool, str | None]]:
        return [(item, *self.validate(item)) for item in items]

    def test_suite(self) -> list[tuple[dict, bool, str]]:
        return [
            ({"codigo": "123456"}, True, "seis"),
            ({"codigo": "1234567"}, True, "sete"),
            ({"codigo": "12345678"}, True, "oito"),
            ({"codigo": "123456789"}, True, "nove"),
            ({"codigo": "123456789012"}, True, "doze"),
            ({"codigo": ""}, False, "vazio"),
            ({"codigo": "A00"}, False, "letra"),
            ({}, False, "item vazio"),
            ({"codigo": "12345"}, False, "cinco"),
            ({"descricao": "Sem codigo"}, False, "sem codigo"),
            ({"codigo": "1234567890123"}, False, "treze"),
        ]

