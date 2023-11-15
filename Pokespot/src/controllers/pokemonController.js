var pokemonModel = require("../models/pokemonModel");

function getPokemonData(req, res) {
    pokemonModel.getPokemonData()
        .then(
            function (resultadoPokemon) {
                // console.log(`\nResultados encontrados: ${resultadoPokemon.length}`);
                // console.log(`Resultados: ${JSON.stringify(resultadoPokemon)}`); // transforma JSON em String

                if (resultadoPokemon.length == 151) {
                    // console.log(resultadoPokemon);

                    res.json({
                        pokemon: resultadoPokemon
                    });
                } else {
                    res.status(403).send("Erro");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    getPokemonData
}