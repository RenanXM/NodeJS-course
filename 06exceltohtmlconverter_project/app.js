var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var Writer = require("./Writer"); 

var leitor = new Reader();
var escritor = new Writer();


async function main() {
    
    var dados = await leitor.Read("./resultado_parcial.csv");  
    var dadosProcessados = Processor.Process(dados);

    var celldata = new Table(dadosProcessados);

    var html = await HtmlParser.Parse(celldata);

    escritor.Write(Date.now() + ".html", html);

}
main();