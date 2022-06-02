/*VAMOS UTILIZAR O EJS :: EMBEDDED JAVASCRIPT TEMPLATIN*/
/*responsavel por rederizar o html para o usuário*/
/*INICIANDO PROJETO GUIAPERGUNTAS*/
/*
PASSO 01: Instalar express pelo cmd:
npm install express --save
PASSO 02: instalar o EJS pelo cmd:
npm install ejs --save
PASSO 03: Rodando com Nodemon pelo cmd:
npx nodemon index.js
*/

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Bem-vindo ao meu site!");
});

app.listen(8080, () => {
    console.log("app guia perguntas e resposta rodado!");
});

