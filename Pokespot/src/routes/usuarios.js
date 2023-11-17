var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/registrarLog", function (req, res) {
    usuarioController.registrarLog(req, res);
});

router.post("/verificarLog", function (req, res) {
    usuarioController.verificarUltimoLog(req, res);
});

router.post("/registrarDiasConsecutivos", function (req, res) {
    usuarioController.registrarDiasConsecutivos(req, res);
});

module.exports = router;