var database = require("../database/config")

function buscarQtdUsuarios() {
    var instrucao = `select count(*) qtdUsers from usuario;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarRankingUsuario() {
    var instrucao = `select nome, count(*) qtd from usuario join pokemonTreinador on idUsuario = fkUsuario group by idUsuario order by qtd desc limit 10;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pokeInicial() {
    var instrucao = `select 
    (select especie from pokemonTreinador 
        join pokemon on fkPokemon = idPokemon 
        where fkUsuario = idUsuario 
        order by dtAdquirido limit 1) pkmnInicial, 
    count(*) qtde 
    from usuario 
    group by pkmnInicial;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarTrafego() {
    var instrucao = `select date(dtHoraLogin) dt, count(*) qtd from historico_log group by dt order by dt desc limit 7;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarQtdUsuarios,
    pokeInicial,
    buscarTrafego,
    buscarRankingUsuario
}