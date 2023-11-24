var database = require("../database/config")

function buscarDadosPokemon(especie) {
    console.log(especie)
    var instrucao = `select * from pokemon join sprite on idPokemon = idSprite join baseStatus on idPokemon = idBaseStatus where especie like "${especie}%"`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarPokemonTreinador(id, especie) {
    var instrucao = `select row_number() over() as id, pt.idPokeTre, pt.fkPokemon, pt.dtAdquirido, pt.isShiny, coalesce(apelido, (select especie from pokemon where idPokemon = fkPokemon)) apelido, pokemon.*, sprite.* from usuario join pokemonTreinador pt on idUsuario = fkUsuario join pokemon on idPokemon = fkPokemon join sprite on idPokemon = idSprite where idUsuario = "${id}" && especie like "${especie}%"`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function renomear(id, apelido) {
    var instrucao = `update pokemonTreinador set apelido = '${apelido}' where idPokeTre = ${id};`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function diferencaDiasUltimoPokemon(id) {
    var instrucao = `select datediff(now(), dtAdquirido) diff from pokemonTreinador where fkUsuario = ${id} order by dtAdquirido desc limit 1;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function inserirPokemon(idTre, idPoke, shiny) {
    var instrucao = `insert into pokemonTreinador (fkUsuario, fkPokemon, isShiny) values (${idTre}, ${idPoke}, ${shiny});`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarQtdPokemon(id) {
    var instrucao = `select count(*) qtdPkmn from pokemonTreinador where fkusuario = ${id};`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarDadosPokemon,
    buscarPokemonTreinador,
    renomear,
    inserirPokemon,
    diferencaDiasUltimoPokemon,
    buscarQtdPokemon
}