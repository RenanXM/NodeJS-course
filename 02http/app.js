// Não vamos utilizar essa biblioteca. So pra exemplo.

// Módulo http ja vem no node
var http = require("http");

http.createServer(function(requisicao, resposta) {
    resposta.end("<h1>Bem vindo ao meu site!<h1><h4>Renan eh lindo<h4>");
}).listen(8181);

console.log("Meu servidor está rodando");

//Requisição -> Resposta.