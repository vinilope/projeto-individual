var LIMITE_POKEMON = 151;

var allPkmn = [];
var pkmnHTMLmsg = '';

fetch(`https://pokeapi.co/api/v2/pokemon?limit=${LIMITE_POKEMON}`)
    .then((res) => res.json())
    .then((data) => {
        // console.log(data)
        allPkmn = data.results;
        getPokemon(allPkmn)
    });


async function getPokemon(pokemon) {
    for (var pkmnAtual = 0; pkmnAtual < pokemon.length; pkmnAtual++) {
        updateProgress(pkmnAtual)
        pkmnID = pkmnAtual + 1;

        pkmnHTMLmsg += `
            <div class="pokemon-card">
                <span class="titulo-id">${pkmnID}</span>
                <span class="titulo-nome">${capitalizeFirstLetter(pokemon[pkmnAtual].name)}</span>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmnID}.png" alt="">
                <span class="tipo-pokemon">${await getTypePokemon(pkmnID)}</span>   
                </div>`;
    }
    pokemon_wrap.innerHTML = pkmnHTMLmsg;
    footer_wrap.style.display = 'block';
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function updateProgress(progress) {
    pokemon_wrap.innerHTML = `<div class="container-progresso"><div style="width: ${progress * 100 / LIMITE_POKEMON}%" class="progresso"></div></div>`;
}

async function getTypePokemon(id) {
    var tipoPokemon = '';

    await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => res.json())
        .then((data) => {
            tipoPokemon += `<p>${data.types[0].type.name}</p>`;
            if (data.types.length == 2)
                tipoPokemon += `<p>${data.types[1].type.name}</p>`;
        });

    return tipoPokemon;
}