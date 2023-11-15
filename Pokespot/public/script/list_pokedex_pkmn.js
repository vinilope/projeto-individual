var url = 'https://img.pokemondb.net/sprites/';
getPokemonData();

function getPokemonData() {
    fetch("/pokemon/getPokemonData", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(function (resposta) {
            if (resposta.ok) {
                console.log(resposta)

                resposta.json().then(json => {
                    drawPokemon(json.pokemon)
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
    var id;

    for (let pkmnAtual = 0; pkmnAtual < pokemon.length; pkmnAtual++) {
        id = pkmnAtual + 1;

        pkmnHTMLmsg += `
        <div class="pokemon-card">
            <span class="titulo-id">${id}</span>
            <span class="titulo-nome">${capitalizeFirstLetter(pokemon[pkmnAtual].especie)}</span>
            <img src="${url + pokemon[pkmnAtual].normal}" alt="">
            <span class="tipo-pokemon">${getTypePokemon(pokemon[pkmnAtual])}</span>   
            </div>`;
    }
    pokemon_wrap.innerHTML = pkmnHTMLmsg;
}

function getTypePokemon(pokemon) {
    var tipoPokemon = '';

    tipoPokemon += `<p>${pokemon.tipo1}</p>`;
    if (pokemon.tipo2 != null)
        tipoPokemon += `<p>${pokemon.tipo2}</p>`;

    return tipoPokemon;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}