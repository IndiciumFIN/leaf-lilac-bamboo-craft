-- Prévia local. Liga o card da home à capa já publicada.
-- Não cria faixa. Não entra no migrate remoto.

insert into source_tool (slug, kind, title, lead, published)
select 'exames-laboratoriais', kind, title, lead, true
from source_tool
where slug = 'exames_laboratoriais'
on conflict (slug) do update set published = true;

update catalog_item as card
set slug = tool.slug
from source_tool as tool
where card.file is not null
  and regexp_replace(card.file, '\.html$', '') = tool.slug
  and card.slug is distinct from tool.slug;

update catalog_item
set slug = 'exames-laboratoriais'
where file = 'exames_laboratoriais.html'
  and slug is distinct from 'exames-laboratoriais';
