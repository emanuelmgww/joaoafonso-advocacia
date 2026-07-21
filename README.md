# João Afonso — Advocacia e Consultoria Jurídica

Landing page do escritório João Afonso, especializado em Direito de Família.
Construída em HTML5, CSS3 e JavaScript puro (sem frameworks ou dependências de build).

## Recursos

- Design responsivo (320px a 2560px)
- Três idiomas (PT / EN / ES) com troca em tempo real e preferência salva
- Carrossel de depoimentos, menu off-canvas no mobile e acessibilidade (ARIA, foco, leitores de tela)
- Tradutor de Libras (VLibras) no canto da tela

## Estrutura

```
.
├── index.html                 Página
├── style.css                  Estilos
├── script.js                  Interações e traduções
├── vlibras-plugin.chunk.js    VLibras — precisa ficar NA RAIZ
├── .nojekyll                  Faz o GitHub Pages servir os arquivos como estão
├── img/                       Logos, foto e texturas de fundo
└── vlibras/
    └── vlibras-plugin.js       Plugin do VLibras
```

> **Atenção:** `vlibras-plugin.chunk.js` deve permanecer na raiz do site, ao lado
> de `index.html`. O plugin busca esse arquivo a partir da raiz; movê-lo para uma
> subpasta quebra o tradutor de Libras.

## Publicar no GitHub Pages

1. Suba todos os arquivos para o repositório (mantendo a estrutura acima).
2. Em **Settings → Pages**, selecione a branch (ex.: `main`) e a pasta `/ (root)`.
3. O link ficará disponível em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

## Antes de publicar — dados a substituir

- Telefone / WhatsApp: `+5511999999999` (em `index.html`)
- E-mail: `contato@joaoafonsoadvocacia.com.br`
- Inscrição na OAB: `OAB/SP 000.000` (rodapé) e `OAB/MG 198.472` (seção Sobre)
- Número da OAB no texto do rodapé (`footer.oab` em `script.js`, nos três idiomas)

## Pendência de performance

As texturas `img/bg-dark.jpg` e `img/bg-light.jpg` somam ~9 MB e devem ser
otimizadas (redimensionar e converter para WebP) antes de um uso em produção,
para não pesar o carregamento no celular.
