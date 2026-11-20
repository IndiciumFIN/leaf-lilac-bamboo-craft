"""Validador schema_validator — Valida conformidade com schema do dominio."""
from __future__ import annotations
from typing import Any
from packages.cli.validators.base import BaseValidator
from packages.cli.validators.registry import register


def _check(item):
    if not isinstance(item, dict):
        return False, "item invalido"
    version = item.get("schema_version")
    canonical = item.get("canonical_id")
    if not isinstance(version, str) or not version.strip():
        return False, "schema_version ausente"
    if not isinstance(canonical, str) or not canonical.strip():
        return False, "canonical_id ausente"
    return True, None


@register
class CLASS_schema_validator(BaseValidator):
    schema_validator = "schema_validator"
    VERSION = "1.0.0"

    @property
    def name(self) -> str:
        return self.schema_validator

    @property
    def version(self) -> str:
        return self.VERSION

    def validate(self, item: dict[str, Any]) -> tuple[bool, str | None]:
        return _check(item)

    def validate_batch(self, items: list[dict[str, Any]]) -> list[tuple[dict, bool, str | None]]:
        return [(item, *self.validate(item)) for item in items]

    def test_suite(self) -> list[tuple[dict, bool, str]]:
        return [
            ({"schema_version": "0.1.0", "canonical_id": "a"}, True, "minimo"),
            ({"schema_version": "1", "canonical_id": "tool.aldrete"}, True, "ferramenta"),
            ({"schema_version": "0.1.0", "canonical_id": "x", "extra": 1}, True, "extra"),
            ({"schema_version": "2026", "canonical_id": "fonte"}, True, "ano"),
            ({"schema_version": "v1", "canonical_id": "nota"}, True, "v1"),
            ({"schema_version": "", "canonical_id": "a"}, False, "versao vazia"),
            ({"schema_version": "0.1.0"}, False, "sem id"),
            ({}, False, "item vazio"),
            ({"canonical_id": "a"}, False, "sem versao"),
            ({"schema_version": "0.1.0", "canonical_id": ""}, False, "id vazio"),
            ({"codigo": "A00"}, False, "formato de outro catalogo"),
        ]

