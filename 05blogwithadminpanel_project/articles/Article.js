const Sequelize = require('sequelize');
const connection = require('../database/database');
const Category = require('../categories/Category');


const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    slug: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
});

// Uma categoria tem muitos artigos
Category.hasMany(Article);
// Um artigo pertence a uma categoria
Article.belongsTo(Category);


//Article.sync({force:true});  Remover após criar tabela.

module.exports = Article;