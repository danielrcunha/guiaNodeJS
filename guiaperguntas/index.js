/*VAMOS UTILIZAR O EJS :: EMBEDDED JAVASCRIPT TEMPLATIN*/
/*responsavel por rederizar o html para o usuário*/
/*INICIANDO PROJETO GUIAPERGUNTAS*/
/*
PASSO 01: Instalar express pelo cmd:
npm install express --save
PASSO 02: instalar o EJS pelo cmd:
npm install ejs --save
PASSO 03: instalar o Nodemon

PASSO 04: Rodando com Nodemon pelo cmd:
npx nodemon index.js
*/

const express = require("express");
const app = express();

/*configurando EJS no express*/
/*Estou dizendo para o express usar o EJS como view engine*/
app.set('view engine', 'ejs');
app.use(express.static('public'));/*arquivos estaticos*/


app.get("/", (req, res) => {




    /*utilizando variaveis*/
    res.render("index")
});

app.listen(8080, () => {
    console.log("app guia perguntas e resposta rodado!");
});

