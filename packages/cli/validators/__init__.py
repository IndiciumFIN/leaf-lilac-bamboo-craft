"""Validators do Kernel. Importar o pacote registra os validadores reais."""
from packages.cli.validators.base import BaseValidator
from packages.cli.validators.registry import register, get_validator, list_validators, VALIDATORS
from packages.cli.validators.sha256_validator import (
    AtomoSchemaValidator,
    NormAtomIdValidator,
    Sha256Validator,
    TextoLengthValidator,
    UrlValidator,
)
from packages.cli.validators.cid10_validator import CLASS_cid10_validator
from packages.cli.validators.cid11_validator import CLASS_cid11_validator
from packages.cli.validators.mesh_validator import CLASS_mesh_validator
from packages.cli.validators.cvx_validator import CLASS_cvx_validator
from packages.cli.validators.schema_validator import CLASS_schema_validator
from packages.cli.validators.loinc_validator import CLASS_loinc_validator
from packages.cli.validators.ncm_validator import CLASS_ncm_validator
from packages.cli.validators.catmat_validator import CLASS_catmat_validator
from packages.cli.validators.human_review_validator import CLASS_human_review_validator

cid10_validator = CLASS_cid10_validator()
cid11_validator = CLASS_cid11_validator()
mesh_validator = CLASS_mesh_validator()
cvx_validator = CLASS_cvx_validator()
schema_validator = CLASS_schema_validator()
loinc_validator = CLASS_loinc_validator()
ncm_validator = CLASS_ncm_validator()
catmat_validator = CLASS_catmat_validator()
human_review_validator = CLASS_human_review_validator()

__all__ = [
    "BaseValidator",
    "register",
    "get_validator",
    "list_validators",
    "VALIDATORS",
    "Sha256Validator",
    "NormAtomIdValidator",
    "TextoLengthValidator",
    "UrlValidator",
    "AtomoSchemaValidator",
    "cid10_validator",
    "cid11_validator",
    "mesh_validator",
    "cvx_validator",
    "schema_validator",
    "loinc_validator",
    "ncm_validator",
    "catmat_validator",
    "human_review_validator",
]
