/*importanto o express*/
const express = require("express");

/*iniciando o express*/
const app = express();

/*criando a rota inicial*/
app.get("/", function (req, res) {
    res.send("<h1>Bem vindo ao guia do programador!</h1>");
});

app.get("/blog", function (req, res) {
    res.send("<h1>Você está no Blog, seja bem-vindo!</h1>");
});

app.get("/canal/youtube", function (req, res) {
    res.send("<h1>Bem-vindo ao meu canal!</h1>");
});

app.get("/Ola/:nome", function (req, res) {
    //req :: dados enviados pelo usuario
    //res :: resposta que vai ser enviada para o usuario

    var nome = req.params.nome;
    res.send("<h1>Oi " + nome + "</h1>");
});

app.listen(4000, function (erro) {
    if (erro) {
        console.log("Ocorreu um erro");
    } else {
        console.log("Servidor iniciado com sucesso");
    }
})