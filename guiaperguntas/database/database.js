//CONECTANDO O SIQUELIZE COM MYSQL
const Sequelize = require('sequelize');
const connection = new Sequelize('guiaperguntas', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

/*exportanto a conecxão*/
module.exports = connection;