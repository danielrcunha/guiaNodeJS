//Model iniciam com letra maiuscula(boa pratica)
const Sequelize = require("sequelize");
const connection = require("./database")

//definindo model
//craindo uma TB usando sequelize
const Pergunta = connection.define('perguntas', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

//sincroniza o que está no BD
Pergunta.sync({ force: false }).then(() => { });