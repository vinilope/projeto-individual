var express = require("express");
var router = express.Router();

var analyticsController = require("../controllers/analyticsController");

router.post("/buscarQtdUsuarios", function (req, res) {
  analyticsController.buscarQtdUsuarios(req, res);
})

router.post("/buscarRankingUsuario", function (req, res) {
  analyticsController.buscarRankingUsuario(req, res);
})

router.post("/pokeInicial", function (req, res) {
  analyticsController.pokeInicial(req, res);
})

router.post("/buscarTrafego", function (req, res) {
  analyticsController.buscarTrafego(req, res);
})

module.exports = router;