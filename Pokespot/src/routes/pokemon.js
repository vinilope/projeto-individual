var express = require("express");
var router = express.Router();

var pokemonController = require("../controllers/pokemonController");

router.post("/getPokemonData", function (req, res) {
  pokemonController.getPokemonData(req, res);
})

module.exports = router;