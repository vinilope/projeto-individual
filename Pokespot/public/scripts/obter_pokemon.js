function buscarPokemon() {

    setTimeout(() => {
        location.reload()
    }, 100);

    fetch("/pokemon/buscarDadosPokemon", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            pkmnEspecie: ''
        })
    })
        .then(function (resposta) {
            if (resposta.ok) {
                console.log(resposta)

                resposta.json().then(json => {
                    obterPokemon(json.pokemon);
                })
            } else {
                throw "Houve um erro ao tentar buscar os pokémons!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

function obterPokemon(pokemon) {
    aleatorio = Math.random()*10;
    var raridadePkmn = 0;

    if (aleatorio > 4) {
        raridadePkmn = 3;
    } else if (aleatorio > 1) {
        raridadePkmn = 2;
    } else {
        raridadePkmn = 1;
    }

    while (true) {
        var id = parseInt(Math.random() * 150 + 1)
        raridade = pokemon[id].raridade;

        if (raridade == raridadePkmn) {
            var idPoke = pokemon[id].idPokemon;
            break;
        }
    }
    inserirPokemon(sessionStorage.ID_USUARIO, idPoke)
}

function inserirPokemon(idTre, idPoke) {

    fetch("/pokemon/inserirPokemon", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            idPoke: idPoke,
            idTre: idTre,
            shiny: isShiny()
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                location.reload()
                console.log('Ok')
            } else {
                throw "Houve um erro ao tentar cadastrar Pokémon!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}

function isShiny() {
    return (Math.random() * 256) < 1;
}