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

/*configurando EJS no express*/
/*Estou dizendo para o express usar o EJS como view engine*/
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    /*criando parametros*/
    var nome = "Daniel Cunha";
    var lang = "Javascript";

    /*utilizando variaveis*/
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Guia do Programador",
        incritos: 8000
    });
});

app.listen(8080, () => {
    console.log("app guia perguntas e resposta rodado!");
});

