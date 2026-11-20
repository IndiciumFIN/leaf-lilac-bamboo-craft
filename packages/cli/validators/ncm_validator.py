"""Validador ncm_validator — Valida NCM (Nomenclatura Comum do Mercosul) - 8 digitos."""
from __future__ import annotations
from typing import Any
from packages.cli.validators.base import BaseValidator
from packages.cli.validators.registry import register


import re
_CODE = re.compile(r"^[0-9]{8}$")

def _check(item):
    codigo = item.get("codigo") if isinstance(item, dict) else None
    if not isinstance(codigo, str) or not codigo.strip():
        return False, "codigo ausente"
    if _CODE.match(codigo):
        return True, None
    return False, "NCM invalido"


@register
class CLASS_ncm_validator(BaseValidator):
    ncm_validator = "ncm_validator"
    VERSION = "1.0.0"

    @property
    def name(self) -> str:
        return self.ncm_validator

    @property
    def version(self) -> str:
        return self.VERSION

    def validate(self, item: dict[str, Any]) -> tuple[bool, str | None]:
        return _check(item)

    def validate_batch(self, items: list[dict[str, Any]]) -> list[tuple[dict, bool, str | None]]:
        return [(item, *self.validate(item)) for item in items]

    def test_suite(self) -> list[tuple[dict, bool, str]]:
        return [
            ({"codigo": "30049099"}, True, "medicamento"),
            ({"codigo": "90189099"}, True, "instrumento"),
            ({"codigo": "38089419"}, True, "desinfetante"),
            ({"codigo": "40151100"}, True, "luva"),
            ({"codigo": "48189090"}, True, "papel"),
            ({"codigo": ""}, False, "vazio"),
            ({"codigo": "A00"}, False, "letra"),
            ({}, False, "item vazio"),
            ({"codigo": "123"}, False, "curto"),
            ({"descricao": "Sem codigo"}, False, "sem codigo"),
            ({"codigo": "300490999"}, False, "nove digitos"),
        ]

