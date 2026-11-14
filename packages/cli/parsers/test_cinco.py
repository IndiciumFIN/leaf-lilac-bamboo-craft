"""Prova dos cinco parsers: hash, dado pessoal e ausência de publicação."""
import hashlib
import json

from packages.cli.parsers.atlas import parse as atlas
from packages.cli.parsers.cdsi import parse as cdsi
from packages.cli.parsers.esavi import parse as esavi
from packages.cli.parsers.sinan import parse as sinan
from packages.cli.parsers.taco import parse as taco
from packages.cli.parsers.coso import ParseHold


def pacote(dado):
    bruto = json.dumps(dado, ensure_ascii=False).encode("utf-8")
    return bruto, hashlib.sha256(bruto).hexdigest()


def exige(fn):
    try:
        fn()
    except ParseHold:
        return
    raise SystemExit("deveria recusar")


def main():
    bruto, digest = pacote({"records": [{"fma_id": "FMA7163", "representation_id": "RP1"}]})
    linha = atlas(bruto, source_id="s", document_id="d", edition="bodyparts3d-fma", expected_sha256=digest)[0]
    assert linha["status"] == "HOLD_HUMAN"
    assert linha["publication_allowed"] is False
    assert linha["clinical_approved"] is False
    assert "COSO-IC-2013+COSO-AI" == linha["control_framework"]
    exige(lambda: atlas(bruto, source_id="s", document_id="d", edition="bodyparts3d-fma", expected_sha256="0" * 64))
    exige(lambda: atlas(b"solid malha", source_id="s", document_id="d", edition="bodyparts3d-fma", expected_sha256=hashlib.sha256(b"solid malha").hexdigest()))

    bruto, digest = pacote({"records": [{"imunobiologico": "BCG", "idade": "ao nascer", "dose": "dose unica"}]})
    linha = cdsi(bruto, source_id="s", document_id="d", edition="pni-calendario", expected_sha256=digest)[0]
    assert linha["dose_rotulo"] == "dose unica"
    assert linha["release_allowed"] is False

    bruto, digest = pacote({"records": [{"ano": 2024, "imunobiologico": "COVID-19", "eventos": 4, "graves": 1}]})
    linha = esavi(bruto, source_id="s", document_id="d", edition="anvisa-esavi-agregado", expected_sha256=digest)[0]
    assert linha["eventos"] == 4 and linha["rights_verified"] is False
    identificado = {"records": [{"ano": 2024, "imunobiologico": "COVID-19", "eventos": 1, "graves": 0, "cpf": "000"}]}
    carga, dig = pacote(identificado)
    exige(lambda: esavi(carga, source_id="s", document_id="d", edition="anvisa-esavi-agregado", expected_sha256=dig))

    bruto, digest = pacote({"records": [{"ano": 2024, "uf": "SP", "cid": "A90", "casos": 3}]})
    linha = sinan(bruto, source_id="s", document_id="d", edition="datasus-sinan-agregado", expected_sha256=digest)[0]
    assert linha["casos"] == 3 and linha["source_origin_verified"] is False
    ficha = {"records": [{"ano": 2024, "uf": "SP", "cid": "A90", "casos": 1, "nm_pacient": "a"}]}
    carga, dig = pacote(ficha)
    exige(lambda: sinan(carga, source_id="s", document_id="d", edition="datasus-sinan-agregado", expected_sha256=dig))

    bruto, digest = pacote({"records": [{"numero": "1", "energia_kcal": 100, "proteina_g": "NA"}]})
    linha = taco(bruto, source_id="s", document_id="d", edition="taco-4", expected_sha256=digest)[0]
    assert linha["nutrientes"]["proteina_g"] is None
    assert "descricao" not in linha
    descrito = {"records": [{"numero": "1", "energia_kcal": 1, "descricao": "arroz"}]}
    carga, dig = pacote(descrito)
    exige(lambda: taco(carga, source_id="s", document_id="d", edition="taco-4", expected_sha256=dig))
    from packages.cli.adapters.dou import parse as dou
    pagina = "<article><h1>Resolucao</h1><p>Texto normativo de exemplo para o diario.</p></article>".encode()
    digest = hashlib.sha256(pagina).hexdigest()
    linha = dou(pagina, source_id="s", document_id="d", edition="cofen_dou", expected_sha256=digest)[0]
    assert linha["status"] == "HOLD_HUMAN" and linha["parser"] == "dou"
    assert "texto_sha256" in linha and "Texto normativo" not in json.dumps(linha)
    print("PASS cinco parsers")


if __name__ == "__main__":
    main()
