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
    pokemon_wrap.innerText = `<div class="not-found px-border">
            <img src="assets/img/icon/down-arrow.png">
            <span>Pokémon não encontrado!</span>
        <div>`;
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
                getPokemonData(pkmn_pesquisado.value);
                location.reload()
                // resposta.json().then(json => {
                //     if (json.tamanho > 0) {
                //         drawPokemon(json.pokemon)
                //     } else {
                //         console.log(json.tamanho)
                //         notFound();
                //     }
                // })
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
            return '#aaaa99'
            break;
        case 'fogo':
            return '#ff4422'
            break;
        case 'água':
            return '#3399ff'
            break;
        case 'elétrico':
            return '#ffcc33'
            break;
        case 'planta':
            return '#77cc55'
            break;
        case 'gelo':
            return '#66ccff'
            break;
        case 'lutador':
            return '#66ccff'
            break;
        case 'venenoso':
            return '#aa5599'
            break;
        case 'terra':
            return '#ddbb55'
            break;
        case 'voador':
            return '#ddbb55'
            break;
        case 'psíquico':
            return '#ff5599'
            break;
        case 'inseto':
            return '#aabb22'
            break;
        case 'pedra':
            return '#bbaa66'
            break;
        case 'fantasma':
            return '#6666bb'
            break;
        case 'dragão':
            return '#7766ee'
            break;
        case 'sombrio':
            return '#775544'
            break;
        case 'metálico':
            return '#aaaabb'
            break;
        case 'fada':
            return '#ee99ee'
            break;


        default:
            return 'red'
            break;
    }
}