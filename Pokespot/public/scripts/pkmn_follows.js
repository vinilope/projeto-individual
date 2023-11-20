pkmns = [
    'bulbasaur',
    'charmander',
    'squirtle',
    'pidgey',
    'rattata',
    'pikachu',
    'zubat',
    'growlithe',
    'ponyta',
    'magnemite',
    'magikarp',
    'ditto',
    'eevee',
    'dratini'
]

var n = parseInt(Math.random()*pkmns.length)
container_pkmn.innerHTML = `<img id="pkmn" class="following-pkmn" src="https://img.pokemondb.net/sprites/sword-shield/icon/${pkmns[n]}.png">`

pkmn.style.marginLeft = 100 + "px";
var mouseX0 = parseInt(pkmn.style.marginLeft, 10);
var velocidade = 0;
var offSetImagem = 50;

document.addEventListener("mousemove", function (event) {
    var mouseX1 = event.clientX; 

    var diferenca = mouseX1 - mouseX0;
    velocidade += diferenca * 0.01;
    mouseX0 = mouseX1;
});

setInterval(function () {
    pkmn.style.marginLeft = ((mouseX0 - velocidade * 100) - offSetImagem) - 250 + "px";

    velocidade *= 0.97;

    if ((velocidade * 100) < 0) {
        pkmn.style.transform = 'scale(1, 1)';
    } else {
        pkmn.style.transform = 'scale(-1, 1)';
    }
}, 16);