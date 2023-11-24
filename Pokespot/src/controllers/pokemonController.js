var pokemonModel = require("../models/pokemonModel");

function buscarDadosPokemon(req, res) {
    var especie = req.body.pkmnEspecie;

    pokemonModel.buscarDadosPokemon(especie)
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

function diferencaDiasUltimoPokemon(req, res) {
    var id = req.body.id;

    pokemonModel.diferencaDiasUltimoPokemon(id)
        .then(
            function (resultadoDiferenca) {
                res.json({
                    diff: resultadoDiferenca[0].diff
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

function buscarPokemonTreinador(req, res) {
    var id = req.body.id;
    var especie = req.body.pkmnEspecie;

    pokemonModel.buscarPokemonTreinador(id, especie)
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

function inserirPokemon(req, res) {
    var idTre = req.body.idTre;
    var idPoke = req.body.idPoke;
    var shiny = req.body.shiny;

    pokemonModel.inserirPokemon(idTre, idPoke, shiny);
}

function buscarQtdPokemon(req, res) {
    var id = req.body.id;

    pokemonModel.buscarQtdPokemon(id)
        .then(
            function (resultadoBuscar) {
                res.json({
                    qtdPkmn: resultadoBuscar[0].qtdPkmn
                });
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
    buscarDadosPokemon,
    buscarPokemonTreinador,
    renomear,
    inserirPokemon,
    buscarQtdPokemon,
    diferencaDiasUltimoPokemon
}