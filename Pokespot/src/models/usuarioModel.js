var database = require("../database/config")

function cadastrar(apelido, email, senha, dtNasc) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", apelido, email, senha);

    var instrucaoCadastro = `
        INSERT INTO usuario (nome, email, senha, dtNasc) VALUES ('${apelido}', '${email}', '${senha}', '${dtNasc}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoCadastro);
    
    return database.executar(instrucaoCadastro);
}

function buscarID(email, senha) {
    var instrucaoBuscarID = `SELECT idUsuario FROM usuario WHERE email = '${email}' AND senha = '${senha}';`;
    console.log("Executando a instrução SQL: \n" + instrucaoBuscarID);
    return database.executar(instrucaoBuscarID)
}

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT idUsuario, nome, email, diasConsecutivos FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function registrarLog(id) {
    var instrucao = `insert into historico_log (fkUsuario) values (${id});`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verificarUltimoLog(id) {
    var instrucao = `select datediff(now(), dtHoraLogin) as diff from historico_log where fkUsuario = ${id} order by idLog desc limit 1;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function registrarDiasConsecutivos(id, diasConsecutivos) {
    var instrucao = `update usuario set diasConsecutivos = ${diasConsecutivos} where idUsuario = ${id};`
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verificarEmailExiste(email) {
    var instrucao = `select idUsuario from usuario where email = '${email}'`
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    autenticar,
    verificarEmailExiste,
    registrarLog,
    verificarUltimoLog,
    registrarDiasConsecutivos,
    buscarID
};