var database = require("../database/config")

function cadastrar(apelido, email, senha, dtNasc) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", apelido, email, senha);

    var instrucao = `
        INSERT INTO usuario (apelido, email, senha, dtNasc) VALUES ('${apelido}', '${email}', '${senha}', '${dtNasc}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
};