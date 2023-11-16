var express = require("express");
var router = express.Router();

var pokemonController = require("../controllers/pokemonController");

router.post("/getPokemonData", function (req, res) {
  pokemonController.getPokemonData(req, res);
})

router.post("/getTrainerPokemon", function (req, res) {
  pokemonController.getTrainerPokemon(req, res);
})

router.post("/renomear", function (req, res) {
  pokemonController.renomear(req, res);
})

module.exports = router;