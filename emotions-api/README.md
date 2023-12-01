## 💻 Projeto Emotions API
Desenvolvimento de uma aplicação no backend com Nodejs, utilizando o Prisma IO, para gerenciamento e venda de carros. Iremos utilizar Typescript e Express.

## 🚀 Tecnologias e Comandos de Execução

---

```cl
  💻 Comando para criar o projeto
  - ✨ npm init -y

  🛠️ Comando para instalar o typescript
  - ✨ npm i typescript -D

  🛠️ Comando para criar o arquivo de configuração do typescript
  - ✨ npm i tsc --init

  🛠️ Biblioteca para o node entender código typescript e executar como javascript
  - ✨ npm i ts-node -D

  🛠️ Biblioteca para executar o servidor
  - ✨ npm i ts-node-dev -D

  🛠️ Biblioteca para requisições, rotas e URLs, entre outras funcionalidades
  - ✨ npm i express
  - ✨ npm i @types/express -D

  🛠️ Biblioteca para adicionar o prisma no projeto
  - ✨ npm i prisma
  - ✨ npm i prisma -D

  🛠️ Instalar prisma client
  - ✨ npm i @prisma/client

  🛠️ Inicializar o prisma
  - ✨ npx prisma init --datasource-provider postgresql  

  🛠️ Comando para criar a migration
  - ✨ npx prisma migrate dev

  🛠️ Biblioteca para tratar errors
  - ✨ npm i express-async-errors

  🛠️ Biblioteca para upload de imagem
  - ✨ npm i multer

  🛠️ Biblioteca permitir o acesso a api
  - ✨ npm i cors
```

  <!-- 🛠️ Biblioteca para o prisma formatar o schema
  - ✨ yarn prisma format -->

## 🛠️ Configurações Para Executar o servidor
```cl
  Para criar um script de execução do servidor no package.json, é necessário passar três comandos.
  
  ## impede que o prisma pare o servidor sempre que houver uma modificação, portanto será responsável por reiniciar o servidor, sempre que algo novo for salvo
  ✨ --exit-child

  ## permite que o servidor execute com agilidade, pois ignora validações desnecessárias
  ✨ --transpile-only

  ## ignora a pasta node_modules
  ✨ --ignore-watch

  Exemplo de script
  "scripts": {
    "dev": "ts-node-dev --exit-child --transpile-only --ignore-watch node_modules src/server.ts"
  },

  ## comando para fazer o deploy das migrations no supabase
  ✨ npx prisma migrate deploy
```

<br />

<div align="center">
  <small>Desenvolvido por Laciene Melo - Dezembro/2022</small>
</div>
