var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    quizController.cadastrar(req, res);
})

router.get("/buscar/:idUsuario", function (req, res) {
    quizController.buscar(req, res);
})
module.exports = router;  