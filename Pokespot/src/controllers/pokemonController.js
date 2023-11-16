var pokemonModel = require("../models/pokemonModel");

function getPokemonData(req, res) {
    var especie = req.body.pkmnEspecie;

    pokemonModel.getPokemonData(especie)
        .then(
            function (resultadoPokemon) {
                // console.log(`\nResultados encontrados: ${resultadoPokemon.length}`);
                // console.log(`Resultados: ${JSON.stringify(resultadoPokemon)}`); // transforma JSON em String

                res.json({
                    pokemon: resultadoPokemon,
                    tamanho: resultadoPokemon.length
                });
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function getTrainerPokemon(req, res) {
    var id = req.body.id;
    var especie = req.body.pkmnEspecie;

    pokemonModel.getTrainerPokemon(id, especie)
        .then(
            function (resultadoPokemon) {
                // console.log(`\nResultados encontrados: ${resultadoPokemon.length}`);
                // console.log(`Resultados: ${JSON.stringify(resultadoPokemon)}`); // transforma JSON em String

                res.json({
                    pokemon: resultadoPokemon,
                    tamanho: resultadoPokemon.length
                });
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function renomear(req, res) {
    var id = req.body.id;
    var apelido = req.body.apelido;

    if (apelido == undefined) {
        res.status(400).send("Seu apelido está undefined!");
    } else if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {
        pokemonModel.renomear(id, apelido)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao renomear! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    getPokemonData,
    getTrainerPokemon,
    renomear
}