// framework web da aplicação
var express = require("express");
// armazenar o objeto do express de fato
var app = express();
// conexao com o mongodb - utilizar o driver do mongodb nativo
var MongoClient = require("mongodb").MongoClient;
// especificar a url de conexao
var url = "mongodb://localhost:27017";

let dadosDoBanco = [];

// cors - habilitar de outro 'servidor' - origem 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// conectar com o banco de dados
MongoClient.connect(
  url,
  function(err, client) {
    // especifico o banco que eu quero
    let banco = client.db("tasklist");
    // coloco os dados em um cursor - conterá a lista de 'objetos' do banco
    let cursor = banco.collection("todo").find();
    cursor.forEach(element => {
      dadosDoBanco.push(element);
    });

    client.close();
  }
);

// serviço de lista que atenderá em um determinado verbo e contém um callback
app.get("/postits", function(req, res) {
  // status da requisição realizada
  res.status(200);
  // retorno os dados do banco
  res.json({ postits: dadosDoBanco });
});

// inicia o servidor em uma determinada porta
app.listen(5000, function() {
  // na função de callback, indica o que deve acontecer
  console.log("Servidor rodando, Hello World.");
});
