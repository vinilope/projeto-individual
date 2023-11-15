var database = require("../database/config")

function getPokemonData() {
    var instrucao = 'select * from pokemon join sprite on idPokemon = idSprite'

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    getPokemonData
}