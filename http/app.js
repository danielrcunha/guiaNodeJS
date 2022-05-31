/*CRIANDO UM SERVIDOR HTTP*/
var http = require("http");

http.createServer(function (requisicao, resposta) {
    resposta.end("<h1>Bem-Vindo ao meu site!</h1><br><h2>Guia do Programador</h2>")
}).listen(8080);
console.log("Servidor Rodando");