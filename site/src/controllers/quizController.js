var quizModel = require("../models/quizModel");

function cadastrar(req, res){
    var respostas_corretasServer = req.body.respostas_corretasServer;
    var respostas_incorretasServer = req.body.respostas_incorretasServer;
    var fkUsuario = req.body.fkUsuarioServer;


    quizModel.cadastrar(respostas_corretasServer, respostas_incorretasServer, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
   
}

function buscar(req, res){
    var idUsuario = req.params.idUsuario;
    console.log("popayyyyyyyyyyyyyyyyy " + idUsuario)
    quizModel.buscar(idUsuario)
            .then(
                function (resultado) {
                    console.log("gedgfldfbfgbvhdf "+ resultado)
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
   
}
module.exports = {
    cadastrar,
    buscar
}