var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        res.json({
                            id: resultadoAutenticar[0].idUsuario,
                            nome: resultadoAutenticar[0].nome,
                            email: resultadoAutenticar[0].email,
                            senha: resultadoAutenticar[0].senha,
                            fotoPerfil: resultadoAutenticar[0].fotoPerfil,
                            diasConsecutivos: resultadoAutenticar[0].diasConsecutivos,
                            qtdPkmn: resultadoAutenticar[0].qtdPkmn
                        });

                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
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

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var apelido = req.body.apelidoServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var dtNasc = req.body.dtServer;

    // Faça as validações dos valores
    if (apelido == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (dtNasc == undefined) {
        res.status(400).send("Sua empresa está undefined!");
    } else {
        usuarioModel.cadastrar(apelido, email, senha, dtNasc)
            .then(
                function (resultado) {
                    res.json(resultado);
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
}

function registrarLog(req, res) {
    var id = req.body.id;

    usuarioModel.registrarLog(id);
}

function verificarUltimoLog(req, res) {
    var id = req.body.id;
    console.log(id)

    usuarioModel.verificarUltimoLog(id)
        .then(
            function (resultadoVerificar) {
                res.json({
                    diff: resultadoVerificar[0].diff
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

function verificarEmailExiste(req, res) {
    var email = req.body.email;
    console.log('email', email)

    usuarioModel.verificarEmailExiste(email)
        .then(
            function (resultadoEmail) {
                res.json({
                    qtdEmail: resultadoEmail.length
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

function registrarDiasConsecutivos(req, res) {
    id = req.body.id;
    diasConsecutivos = req.body.dias;
    usuarioModel.registrarDiasConsecutivos(id, diasConsecutivos)
}

function buscarID(req, res) {
    var email = req.body.email;
    var senha = req.body.senha;

    usuarioModel.buscarID(email, senha)
        .then(
            function (resultadoBuscarID) {
                res.json({
                    id: resultadoBuscarID[0].idUsuario
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

function mudarFoto(req, res) {
    var id = req.body.id;
    var url = req.body.url;

    if (url == undefined) {
        res.status(400).send("Sua url está undefined!");
    } else if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {
        usuarioModel.mudarFoto(id, url)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao mudar a foto de perfil! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function renomear(req, res) {
    var id = req.body.id;
    var nome = req.body.nome;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {
        usuarioModel.renomear(id, nome)
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

function alterarSenha(req, res) {
    var id = req.body.id;
    var senha = req.body.senha;

    if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {
        usuarioModel.alterarSenha(id, senha)
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
    cadastrar,
    autenticar,
    verificarEmailExiste,
    registrarLog,
    verificarUltimoLog,
    registrarDiasConsecutivos,
    buscarID,
    mudarFoto,
    renomear,
    alterarSenha
}