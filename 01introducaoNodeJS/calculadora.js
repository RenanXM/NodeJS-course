var nome = 'minha calculadora versão 1'

function soma(a,b) {
    return a+b;
}

function mult(a,b) {
    return a*b;
}

function sub(a,b) {
    return a-b;
}

function div(a,b) {
    return a/b
}

//exportando as funções p/ acesso em outros arquivos
module.exports = {
    soma,
    mult,
    sub,
    div,
    nome

}