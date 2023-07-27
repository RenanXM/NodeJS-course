const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root', '24867826', {
    host: 'localhost',
    dialect: 'mysql'

});

// Para poder usar a conexão em outros arquivos
module.exports = connection;
