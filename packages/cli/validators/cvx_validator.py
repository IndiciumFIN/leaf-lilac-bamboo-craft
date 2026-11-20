"""Validador cvx_validator — Valida codigos CVX de vacinas CDC."""
from __future__ import annotations
from typing import Any
from packages.cli.validators.base import BaseValidator
from packages.cli.validators.registry import register


def _check(item):
    codigo = item.get("codigo") if isinstance(item, dict) else None
    if isinstance(codigo, int):
        codigo = str(codigo)
    if not isinstance(codigo, str) or not codigo.strip():
        return False, "codigo ausente"
    if codigo.isdigit() and 1 <= int(codigo) <= 999:
        return True, None
    return False, "codigo CVX invalido"


@register
class CLASS_cvx_validator(BaseValidator):
    cvx_validator = "cvx_validator"
    VERSION = "1.0.0"

    @property
    def name(self) -> str:
        return self.cvx_validator

    @property
    def version(self) -> str:
        return self.VERSION

    def validate(self, item: dict[str, Any]) -> tuple[bool, str | None]:
        return _check(item)

    def validate_batch(self, items: list[dict[str, Any]]) -> list[tuple[dict, bool, str | None]]:
        return [(item, *self.validate(item)) for item in items]

    def test_suite(self) -> list[tuple[dict, bool, str]]:
        return [
            ({"codigo": "1"}, True, "um"),
            ({"codigo": "03"}, True, "tres"),
            ({"codigo": "88"}, True, "influenza historico"),
            ({"codigo": "207"}, True, "covid"),
            ({"codigo": "999"}, True, "teto"),
            ({"codigo": ""}, False, "vazio"),
            ({"codigo": "A00"}, False, "letra"),
            ({}, False, "item vazio"),
            ({"codigo": "0"}, False, "zero"),
            ({"descricao": "Sem codigo"}, False, "sem codigo"),
            ({"codigo": "1000"}, False, "quatro digitos"),
        ]

