const Sequelize = require('sequelize');

const connection = new Sequelize('guiapress', 'root', '24867826', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;