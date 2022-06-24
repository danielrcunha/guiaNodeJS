/*VAMOS UTILIZAR O EJS :: EMBEDDED JAVASCRIPT TEMPLATIN*/
/*responsavel por rederizar o html para o usuário*/
/*INICIANDO PROJETO GUIAPERGUNTAS*/
/*
PASSO 01: Instalar express pelo cmd:
npm install express --save
PASSO 02: instalar o EJS pelo cmd:
npm install ejs --save
PASSO 03: instalar o Nodemon npm install nodemon -g
PASSO 04: Rodando com Nodemon pelo cmd:
npx nodemon index.js
PASSO 05: Instalar no projeto: npm install sequelize
*/

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

/*importando a variavel Pergunta de Pergunta.js*/
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");


//database
connection.authenticate()
    .then(() => {
        console.log("Conexão feita com o BD!");
    })
    .catch((msgErro) => {
        console.log(msgErro);
    });

/*configurando EJS no express*/
/*Estou dizendo para o express usar o EJS como view engine*/
app.set('view engine', 'ejs');
app.use(express.static('public'));/*arquivos estaticos*/

//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//ROTAS
app.get("/", (req, res) => {
    Pergunta.findAll({
        raw: true,
        order: [['id', 'desc'] /*ordenando pelo ID decrescente*/
        ]
    }).then(perguntas => {
        res.render("index", {
            perguntas: perguntas /*Criando uma variavel perguntas para receber as perguntas do BD*/
        })
    });
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar"); /*vai renderizar um html, quer dizer, vai retornar*/
});

/*usando o post*/
app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/"); /*após salvar redireciona para /*/
    });
});

/*rota p/ pagina de pergunta*/ //NEW NEW NEW
app.get("/pergunta/:id", (req, res) => {
    var id = req.params.id;
    Pergunta.findOne({ //modelo.primeiraLinha
        where: { id: id } //onde id=id
    }).then(pergunta => {
        if (pergunta != undefined) {//pergunta encontrada
            res.render("pergunta", {
                pergunta: pergunta
            });
        } else {//pergunta ñ encontrada
            res.redirect("/");
        }
    });
});


app.listen(8080, () => {
    console.log("app guia perguntas e resposta rodado!");
});

//