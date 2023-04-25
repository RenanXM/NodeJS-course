//Importando o express
const express = require('express');

//Função que vai carregar todo o Framework
//Express dentro da variável app.
const app = express();

//criando uma rota pra home(/)
app.get("/", function(req, res) {
    //a função vai ser chamada.
    //enviando uma resposta
    res.send("<h1>Bem vindo meu NOBRE</h1>");
});

//recebendo o parâmetros (colocar ? torna opcional.)
app.get("/blog/:artigo?", function(req, res) {

    var artigo = req.params.artigo;

    if(artigo) {
        res.send("<h2>Artigo: " + artigo + " </h2>")
    } else {
        res.send("Bem vindo ao meu blog");
    }
});



app.get("/canal/youtube", function(req, res) {
    //query params        desuso.
    var canal = req.query["canal"];

    if(canal) {   
     res.send(canal)
    } else {
        res.send("Nenhum canal fornecido.")
    }
});


//recebendo o parâmetros (colocar ? torna opcional.)
app.get("/ola/:nome/:empresa", function(req,res) {
    //REQ -> dados enviados pelo usuário
    //RES -> resposta que vai ser enviada pelo usuario
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send("<h1>Oi " + nome + " do " + empresa + " </h1>");
});


//Passo a porta e uma funçãozinha de erro.
app.listen(4000,function(erro) {
    if(erro) {
        console.log("Ocorreu um erro");
    } else {
        console.log("Servidor iniciado com sucesso")
    }
})

