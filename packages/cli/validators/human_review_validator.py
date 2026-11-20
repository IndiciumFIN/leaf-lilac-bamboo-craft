"""Validador human_review_validator — Validador placeholder para revisao humana - sempre pending."""
from __future__ import annotations
from typing import Any
from packages.cli.validators.base import BaseValidator
from packages.cli.validators.registry import register


_DECISIONS = {"HOLD_HUMAN", "ASSURED", "REVIEW_REQUIRED"}

def _check(item):
    if not isinstance(item, dict):
        return False, "item invalido"
    reviewer = item.get("reviewer")
    decision = item.get("decision")
    if not isinstance(reviewer, str) or not reviewer.strip():
        return False, "revisor ausente"
    if decision not in _DECISIONS:
        return False, "decisao humana ausente"
    return True, None


@register
class CLASS_human_review_validator(BaseValidator):
    human_review_validator = "human_review_validator"
    VERSION = "1.0.0"

    @property
    def name(self) -> str:
        return self.human_review_validator

    @property
    def version(self) -> str:
        return self.VERSION

    def validate(self, item: dict[str, Any]) -> tuple[bool, str | None]:
        return _check(item)

    def validate_batch(self, items: list[dict[str, Any]]) -> list[tuple[dict, bool, str | None]]:
        return [(item, *self.validate(item)) for item in items]

    def test_suite(self) -> list[tuple[dict, bool, str]]:
        return [
            ({"reviewer": "enf-1", "decision": "HOLD_HUMAN"}, True, "espera"),
            ({"reviewer": "enf-2", "decision": "ASSURED"}, True, "assegurado"),
            ({"reviewer": "enf-3", "decision": "REVIEW_REQUIRED"}, True, "revisao"),
            ({"reviewer": "conselho", "decision": "HOLD_HUMAN"}, True, "conselho"),
            ({"reviewer": "qa", "decision": "ASSURED", "note": "ok"}, True, "com nota"),
            ({"reviewer": "", "decision": "HOLD_HUMAN"}, False, "revisor vazio"),
            ({"reviewer": "enf-1", "decision": "APPROVED"}, False, "decisao fora do conjunto"),
            ({}, False, "item vazio"),
            ({"decision": "HOLD_HUMAN"}, False, "sem revisor"),
            ({"reviewer": "enf-1"}, False, "sem decisao"),
            ({"reviewer": "enf-1", "decision": ""}, False, "decisao vazia"),
        ]

