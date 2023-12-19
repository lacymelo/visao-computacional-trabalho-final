## 💻 Projeto Emotions API
Desenvolvimento de uma API Rest em NodeJs com Prisma ORM, Typescript, Multer, Cors, Express, e integração online com a base de dados no Supabase.

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

## 🛠️ Configurações da API
```cl
  Para criar um script de execução do servidor no package.json, é necessário passar três comandos.
  
  ## impede que o prisma pare o servidor sempre que houver uma modificação, portanto será responsável por reiniciar o servidor, sempre que algo novo for salvo
  ✨ --exit-child

  ## permite que o servidor execute com agilidade, pois ignora validações desnecessárias
  ✨ --transpile-only

  ## ignora a pasta node_modules
  ✨ --ignore-watch

  Esse script deve ser adicionado no package.json da emotions-api
  "scripts": {
    "dev": "ts-node-dev --exit-child --transpile-only --ignore-watch node_modules src/server.ts"
  },
```

## 🛠️ Como executar
```cl
  ## Entre no diretório emotions-api, e instale as libs, executando o seguinte comando
  ✨ npm run dev

  ## Para executar o projeto execute
  ✨ npm run dev

  ## comando para fazer o deploy das migrations no supabase
  ✨ npx prisma migrate deploy
```

## :man_student: Autor
---
<a href="https://www.linkedin.com/in/laciene-alves-melo-97a69b222/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
Feito com ♥ by Laciene Melo:wave: [#lacymelo](https://github.com/lacymelo)