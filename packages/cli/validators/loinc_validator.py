"""Validador loinc_validator — Valida codigos LOINC para observacoes clinicas."""
from __future__ import annotations
from typing import Any
from packages.cli.validators.base import BaseValidator
from packages.cli.validators.registry import register


import re
_CODE = re.compile(r"^[0-9]{1,5}-[0-9]$")

def _check(item):
    codigo = item.get("codigo") if isinstance(item, dict) else None
    if not isinstance(codigo, str) or not codigo.strip():
        return False, "codigo ausente"
    if _CODE.match(codigo):
        return True, None
    return False, "codigo LOINC invalido"


@register
class CLASS_loinc_validator(BaseValidator):
    loinc_validator = "loinc_validator"
    VERSION = "1.0.0"

    @property
    def name(self) -> str:
        return self.loinc_validator

    @property
    def version(self) -> str:
        return self.VERSION

    def validate(self, item: dict[str, Any]) -> tuple[bool, str | None]:
        return _check(item)

    def validate_batch(self, items: list[dict[str, Any]]) -> list[tuple[dict, bool, str | None]]:
        return [(item, *self.validate(item)) for item in items]

    def test_suite(self) -> list[tuple[dict, bool, str]]:
        return [
            ({"codigo": "2345-7"}, True, "glicose"),
            ({"codigo": "718-7"}, True, "hemoglobina"),
            ({"codigo": "4548-4"}, True, "hemoglobina glicada"),
            ({"codigo": "2951-2"}, True, "sodio"),
            ({"codigo": "6301-6"}, True, "inr"),
            ({"codigo": ""}, False, "vazio"),
            ({"codigo": "A00"}, False, "nao numerico"),
            ({}, False, "item vazio"),
            ({"codigo": "123"}, False, "sem digito verificador"),
            ({"descricao": "Sem codigo"}, False, "sem codigo"),
            ({"codigo": "2345-77"}, False, "verificador longo"),
        ]

