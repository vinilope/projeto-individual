var analyticsModel = require("../models/analyticsModel");

function buscarQtdUsuarios(req, res) {
    analyticsModel.buscarQtdUsuarios()
        .then(
            function (qtdUsuarioRes) {
                res.json({
                    qtde: qtdUsuarioRes[0].qtdUsers
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

function buscarRankingUsuario(req, res) {
    analyticsModel.buscarRankingUsuario()
        .then(
            function (usuarioRankRes) {
                res.json({
                    user: usuarioRankRes
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

function pokeInicial(req, res) {
    analyticsModel.pokeInicial()
        .then(
            function (pokeInicialRes) {
                res.json({
                    pokeIniciais: pokeInicialRes
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

function buscarTrafego(req, res) {
    analyticsModel.buscarTrafego()
        .then(
            function (buscarTrafegoRes) {
                res.json({
                    trafego: buscarTrafegoRes
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

module.exports = {
    buscarQtdUsuarios,
    buscarRankingUsuario,
    pokeInicial,
    buscarTrafego
}