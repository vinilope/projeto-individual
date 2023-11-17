document.title = sessionStorage.NOME_USUARIO + ' - Pokéspot';
var idUsuario = sessionStorage.ID_USUARIO;

var url = 'https://img.pokemondb.net/sprites/';
var allPkmn;
getPokemonData('');

function getPokemonData(pkmnPesquisado) {
    fetch("/pokemon/getTrainerPokemon", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            pkmnEspecie: pkmnPesquisado,
            id: idUsuario
        })
    })
        .then(function (resposta) {
            if (resposta.ok) {
                console.log(resposta)

                resposta.json().then(json => {
                    if (json.tamanho > 0) {
                        allPkmn = json.pokemon;
                        drawPokemon(allPkmn)
                    } else {
                        console.log(json.tamanho)
                        notFound();
                    }
                })
            } else {
                throw "Houve um erro ao tentar buscar os pokémons!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

function drawPokemon(pokemon) {
    var pkmnHTMLmsg = '';
    // var id;

    for (let pkmnAtual = 0; pkmnAtual < pokemon.length; pkmnAtual++) {
        // id = pkmnAtual + 1;
        pkmn = pokemon[pkmnAtual]

        pkmnHTMLmsg += `
                <div onclick="showPokemonInfo('${pkmn.id}')" class="pokemon-card">
                <span class="titulo-id">${pkmn.idPokemon}</span>
                    <span class="titulo-nome">${pkmn.apelido}</span>
                    <img class="pkmn-img" src="${url + pkmn.normal}" alt="">
                    <span class="titulo-nome">${capitalizeFirstLetter(pkmn.especie)}</span>
                    </div>`;
        // <img onclick="renomear(${pkmn.fkPokemon}, ${pkmn.fkUsuario}, 'dsdg')" class="icon rename" src="assets/img/icon/rename.png">
    }
    pokemon_wrap.innerHTML = pkmnHTMLmsg;
}

function getTypePokemon(pokemon) {
    var tipoPokemon = '';

    tipoPokemon += `<p class="px-small-corner" style="background-color: ${getTypeColor(pokemon.tipo1)}">${pokemon.tipo1}</p>`;
    if (pokemon.tipo2 != null)
        tipoPokemon += `<p class="px-small-corner" style="background-color: ${getTypeColor(pokemon.tipo2)}">${pokemon.tipo2}</p>`;

    return tipoPokemon;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function notFound() {
    pokemon_wrap.innerHTML = `<div class="not-found px-border">
            <img src="assets/img/icon/down-arrow.png">
            <span>Pokémon não encontrado!</span>
        </div>`;
}

function renomear(id) {
    apelido = apelido_h2.innerHTML.replaceAll('<br>', ' ');

    console.log(id, apelido)
    fetch("/pokemon/renomear", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: id,
            apelido: apelido
        })
    })
        .then(function (resposta) {
            if (resposta.ok) {
                console.log(resposta)
                location.reload()
            } else {
                throw "Houve um erro ao tentar buscar os pokémons!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

function getTypeColor(type) {
    switch (type) {
        case 'normal':
            return '#aaaa99';
        case 'fogo':
            return '#ff4422';
        case 'água':
            return '#3399ff';
        case 'elétrico':
            return '#ffcc33';
        case 'planta':
            return '#77cc55';
        case 'gelo':
            return '#66ccff';
        case 'lutador':
            return '#66ccff';
        case 'venenoso':
            return '#aa5599';
        case 'terra':
            return '#ddbb55';
        case 'voador':
            return '#ddbb55';
        case 'psíquico':
            return '#ff5599';
        case 'inseto':
            return '#aabb22';
        case 'pedra':
            return '#bbaa66';
        case 'fantasma':
            return '#6666bb';
        case 'dragão':
            return '#7766ee';
        case 'sombrio':
            return '#775544';
        case 'metálico':
            return '#aaaabb';
        case 'fada':
            return '#ee99ee';

        default:
            return 'red';
    }
}