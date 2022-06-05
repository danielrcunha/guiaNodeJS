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

app.get("/:nome/:lang", (req, res) => {
    /*criando parametros*/
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;

    /*ARRAY*/
    var produtos = [
        { nome: "Doritos", preco: 3.14 },
        { nome: "Coca-cola", preco: 5 },
        { nome: "Leite", preco: 1.45 }
    ]

    /*utilizando variaveis*/
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Guia do Programador",
        inscritos: 8000,
        msg: exibirMsg,
        produtos: produtos
    });
});

app.listen(8080, () => {
    console.log("app guia perguntas e resposta rodado!");
});

