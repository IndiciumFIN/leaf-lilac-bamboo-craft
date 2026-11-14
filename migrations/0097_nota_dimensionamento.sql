-- A calculadora candidata não promove a revogação a conforme.

update normative_revocation
set note = 'Calculadora candidata usa (1+IST)=1,15 da legenda do Parecer 01/2024. Não está homologada. Páginas antigas ainda citam 543/2017.'
where id = 'REV-COFEN-543-743';
