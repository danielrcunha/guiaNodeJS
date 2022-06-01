/*importanto o express*/
const express = require("express");

/*iniciando o express*/
const app = express();

/*criando a rota inicial*/
app.get("/", function (req, res) {
    res.send("<h1>Bem vindo ao guia do programador!</h1>");
});

/*parametro não obrigatorio :artigo?*/
app.get("/blog/:artigo?", function (req, res) {

    var artigo = req.params.artigo;
    if (artigo) {
        res.send("<h2>Artigo: " + artigo + " </h2>");
    } else {
        res.send("<h2>Bem-vindo ao Blog!</h2>");
    }

    res.send("<h1>Você está no Blog, seja bem-vindo!</h1>");
});

/*utilizando query param*/
app.get("/canal/youtube", function (req, res) {
    var canal = req.query["canal"];

    if (canal) {
        res.send(canal);
    } else {
        res.send("nenhum canal fornecido");
    }

    res.send(canal);
    //navegador :: http://localhost:4000/canal/youtube?canal=valores
    //res.send("<h1>Bem-vindo ao meu canal!</h1>");
});

app.get("/Ola/:nome/:empresa", function (req, res) {
    //req :: dados enviados pelo usuario
    //res :: resposta que vai ser enviada para o usuario

    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send("<h1>Oi " + nome + " da " + empresa + "</h1>");
});

app.listen(4000, function (erro) {
    if (erro) {
        console.log("Ocorreu um erro");
    } else {
        console.log("Servidor iniciado com sucesso");
    }
})