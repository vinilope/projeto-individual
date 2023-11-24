var express = require("express");
var router = express.Router();

var pokemonController = require("../controllers/pokemonController");

router.post("/buscarDadosPokemon", function (req, res) {
  pokemonController.buscarDadosPokemon(req, res);
})

router.post("/buscarPokemonTreinador", function (req, res) {
  pokemonController.buscarPokemonTreinador(req, res);
})

router.post("/diferencaDiasUltimoPokemon", function (req, res) {
  pokemonController.diferencaDiasUltimoPokemon(req, res);
})

router.post("/renomear", function (req, res) {
  pokemonController.renomear(req, res);
})

router.post("/inserirPokemon", function (req, res) {
  pokemonController.inserirPokemon(req, res);
})

router.post("/buscarQtdPokemon", function (req, res) {
  pokemonController.buscarQtdPokemon(req, res);
})

module.exports = router;