var Reader = require("./Reader");
var Processor = require("./Processor");

var leitor = new Reader();


async function main() {
    
    var dados = await leitor.Read("./resultado_parcial.csv");  
    var dadosProcessados = Processor.Process(dados);
}

main();