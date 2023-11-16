var database = require("../database/config")

function getPokemonData(especie) {
    console.log(especie)
    var instrucao = `select * from pokemon join sprite on idPokemon = idSprite where especie like "${especie}%"`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function getTrainerPokemon(id, especie) {
    var instrucao = `select row_number() over() as id, pokemonTreinador.*, pokemon.*, sprite.* from usuario join pokemonTreinador on idUsuario = fkUsuario join pokemon on idPokemon = fkPokemon join sprite on idPokemon = idSprite where idUsuario = "${id}" && especie like "${especie}%"`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function renomear(id, apelido) {
    var instrucao = `update pokemonTreinador set apelido = '${apelido}' where idPokeTre = ${id};`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    getPokemonData,
    getTrainerPokemon,
    renomear
}