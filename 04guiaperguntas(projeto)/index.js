const express = require("express");
const app = express();

//Dizendo para o Express usar o EJS como View Engine
app.set('view engine', 'ejs');


app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = true;
    //passando valores pro meu html(ejs)
    //<%= %> //exibir valor da variável.
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa:"Renan's Tecnologia",
        inscritos: 8040,
        msg: exibirMsg
    });
});

app.listen(8080, () => {console.log("App rodando!");});

//teste

