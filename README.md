# João Afonso — Advocacia e Consultoria Jurídica

Landing page do escritório João Afonso, especializado em Direito de Família.
HTML5, CSS3 e JavaScript puro, sem framework. Otimizada para performance
(imagens WebP/AVIF responsivas, CSS crítico inline, JS deferido).

## Estrutura

```
.
├── index.html              Página (CSS crítico minificado embutido no <head>)
├── style.css               Fonte do CSS (editável) — ver "Build" abaixo
├── script.js               Fonte do JS (editável)
├── script.min.js           JS minificado (servido)
├── vlibras-plugin.chunk.js  VLibras — precisa ficar NA RAIZ
├── .nojekyll               Faz o GitHub Pages servir os arquivos como estão
├── img/                    Imagens em WebP/AVIF, múltiplas larguras (srcset)
└── vlibras/
    └── vlibras-plugin.js    Plugin do VLibras
```

> `vlibras-plugin.chunk.js` deve permanecer na raiz, ao lado de `index.html`.
> Movê-lo para uma subpasta quebra o tradutor de Libras.

## Build (quando editar CSS ou JS)

O `index.html` servido tem o CSS **minificado e embutido** no `<head>` (elimina
requisição render-blocking) e referencia o `script.min.js`. Ao alterar os fontes
`style.css` ou `script.js`, regenere os artefatos com o esbuild:

```bash
# 1. minificar
npx esbuild style.css  --minify --outfile=style.min.css
npx esbuild script.js  --minify --outfile=script.min.js

# 2. re-embutir o CSS no index.html (substitui o bloco <style>…</style>)
node -e "const fs=require('fs');let h=fs.readFileSync('index.html','utf8');const c=fs.readFileSync('style.min.css','utf8');fs.writeFileSync('index.html',h.replace(/<style>[\s\S]*?<\/style>/,'<style>'+c+'</style>'));"

# 3. remover o intermediário
rm style.min.css
```

(`npx esbuild` baixa o esbuild sob demanda; nada é comprometido no repositório.)

## Imagens

Todas as imagens foram convertidas de PNG/JPG para WebP e AVIF, em múltiplas
larguras servidas via `srcset`/`sizes` e `<picture>`. As texturas de fundo
(antes 3508×3508, ~4,5 MB cada) foram redimensionadas para 1600px.

- Hero (LCP): `logo-hero-{320,560,1120}.{avif,webp}` — carregada com prioridade alta
- Foto do Dr.: `dr-joao-{400,600,735}.{avif,webp}` — `loading="lazy"`
- Fundos: `bg-dark-1600.{avif,webp}`, `bg-light-1600.webp` (via `image-set`)
- Favicon: `favicon.png`

## Publicar no GitHub Pages

1. Suba todos os arquivos mantendo a estrutura acima.
2. **Settings → Pages → Branch `main` / pasta `/ (root)` → Save**.
3. Link: `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

## Antes de publicar — dados a substituir

- Telefone / WhatsApp: `+5511999999999` (em `index.html`)
- E-mail: `contato@joaoafonsoadvocacia.com.br`
- OAB: `OAB/SP 000.000` (rodapé) e `OAB/MG 198.472` (seção Sobre)
- Número da OAB no `footer.oab` de `script.js` (três idiomas) — lembre de rebuildar
