const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");
// Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o Banco de Dados")
    })
    .catch((msgErro) => {
        console.log("msgErro")
    })

// Estou dizendo para o Express usar o EJS como View engine!
app.set('view engine','ejs');
app.use(express.static('public'));
// Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Rotas

// Inicial
app.get("/",(req, res) => {
    Pergunta.findAll({raw:true, order: [
        ['id','DESC'] //ASC = crescente, DESC = decrescente
    ]}).then(perguntas => {
        res.render("index", { 
            perguntas: perguntas
        });
    });
}); 


app.get("/perguntar",(req, res) => {
    res.render("perguntar");
})

// Criar pergunta
app.post("/salvarpergunta",(req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    // CREATE : insert INTO ...
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        // Caso sucesso: redireciona pra '/'
        res.redirect("/")
    });
});

// Página da Pergunta
app.get("/pergunta/:id", (req,res) => {
    var id = req.params.id;
    Pergunta.findOne({
        where: {id: id}
    }).then(pergunta => {
        if(pergunta != undefined) {

            Resposta.findAll({
                where: {perguntaId: pergunta.id},
                order: [
                    ['id', 'DESC']
                ]

            }).then(respostas => {
                res.render("pergunta", {
                    pergunta: pergunta,
                    respostas: respostas
                });
            });
        } else {
            res.redirect("/")
        }
    });
});

// Responder Pergunta
app.post("/responder", (req, res) => {
    var corpo = req.body.corpo;
    var perguntaId = req.body.pergunta;
    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId 
    }).then(() => {
        res.redirect("/pergunta/" + perguntaId)
    })
})


app.listen(8080,()=>{console.log("App rodando!");});
