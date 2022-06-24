//novo model
const Sequelize = require("sequelize");
const connection = require("./database");

/*const model = ("nm_tabela",{
    contrução do model
})*/
const Resposta = connection.define("respostas", {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Resposta.sync({ force: false });
/*model ou TB do DB.sync(
    force: false para ele não recriar a TB caso exista
*/

module.exports = Resposta;