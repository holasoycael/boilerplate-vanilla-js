# Setup Vanilla JS com TypeScript

Este boilerplate é inspirado nas minhas últimas aplicações com JS puro.

## 🌟 Quick Start

Na pasta do projeto use o comando abaixo para instalação:
```sh
git clone https://github.com/holasoycael/boilerplate-vanilla-ts.git . && rm -rf ./.git && git init && git branch -M main && git add . && git commit -m "Initial commit"
```

E agora, é só adicionar seu repositório remoto ✨

## Scripts disponíveis

No diretório do projeto, você pode executar:

### `yarn dev`

Escuta alterações dos arquivos e automaticamente faz a build. \
Você também verá quaisquer erros de lint no console.

### `yarn build`

Compila o aplicativo para produção na pasta de biuld.

A compilação é reduzida e os nomes dos arquivos incluem os hashes.
Seu aplicativo está pronto para ser implantado!

#
### `Tecnologias útilizadas`

@devDependencies
- [Typescript](https://www.typescriptlang.org/)
- [ESlint](https://eslint.org)
- [Prettier](https://prettier.io)

>As tecnologias listadas acima no projeto aumentam minha produtividade e simplifica processos dentro da equipe nos dando poderes enorme no ambiente de desenvolviemnto.
#
### `Add .vscode/settings.json folder`
```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

#
### `Arquitetura de projeto`

```
`PROJECT`
├── node_modules
├── public
│   ├── fonts
│   │   ├── poppins-v12-latin-300.woff2
│   │   ├── poppins-v12-latin-600.woff2
│   │   └── poppins-v12-latin-regular.woff2
│   ├── img
│   │   ├── favicon.ico
│   │   ├── logo192.png
│   │   └── logo512.png
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── @types
│   │   └── window.d.ts
│   ├── utils
│   │   └── base64.ts
│   ├── typings
│   │   └── App.ts
│   └── utils
├── .editorconfig
├── .env
├── .eslintrc
├── .eslintignore
├── .gitignore
├── .prettierrc
├── package.json
├── README.md
├── tsconfig.json
└── webpack.config.js
```
