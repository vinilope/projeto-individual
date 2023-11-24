var url = "https://img.pokemondb.net/sprites/";
buscarDadosPokemon("");

var todosPokemon = [];

function buscarDadosPokemon(pkmnPesquisado) {
  fetch("/pokemon/buscarDadosPokemon", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pkmnEspecie: pkmnPesquisado,
    }),
  })
    .then(function (resposta) {
      if (resposta.ok) {
        console.log(resposta);

        resposta.json().then((json) => {
          if (json.tamanho > 0) {
            todosPokemon = json.pokemon;
            drawPokemon(todosPokemon);
          } else {
            console.log(json.tamanho);
            notFound();
          }
        });
      } else {
        throw "Houve um erro ao tentar buscar os pokémons!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
}

function drawPokemon(pokemon) {
  var pkmnHTMLmsg = "";
  var id;

  for (var pkmnAtual = 0; pkmnAtual < pokemon.length; pkmnAtual += 1) {
    id = pkmnAtual + 1;

    pkmnHTMLmsg += `
        <div onclick="mostrarInfoPokedex(${id})" class="pokemon-card">
            <span class="titulo-id">${pokemon[pkmnAtual].idPokemon}</span>
            <span class="titulo-nome">${capitalizeFirstLetter(
              pokemon[pkmnAtual].especie
            )}</span>
            <img src="${url + pokemon[pkmnAtual].normal}" alt="">
            <span class="tipo-pokemon">${buscarTipoPokemon(
              pokemon[pkmnAtual]
            )}</span>   
            </div>`;
  }
  pokemon_wrap.innerHTML = pkmnHTMLmsg;
}

function mostrarInfoPokedex(id) {
  pokemon_info.style.display = "flex";
  id -= 1;

  var idPoke = todosPokemon[id].idPokemon;
  var especie = todosPokemon[id].especie;
  var descricao = todosPokemon[id].descricao;
  var tipos = buscarTipoPokemon(todosPokemon[id]);
  var peso = todosPokemon[id].peso / 10 + " kg";
  var altura = todosPokemon[id].altura / 10 + " m";
  var normal = todosPokemon[id].normal;
  var animNormal = todosPokemon[id].animNormal;
  var shiny = todosPokemon[id].shiny;
  var animShiny = todosPokemon[id].animShiny;

  var hp = todosPokemon[id].hp;
  var atk = todosPokemon[id].attack;
  var def = todosPokemon[id].defense;
  var spatk = todosPokemon[id].atkSpecial;
  var spdef = todosPokemon[id].defSpecial;
  var spd = todosPokemon[id].speed;

  pokemon_wrap.style.display = "none";

  pokemon_info.innerHTML = `
            <div class="info-card px-border pkdx-card">
                <div class="info-close-wrap pkdx-info">
                    <img style="width: 40px;" onclick="document.getElementById('cry${idPoke}').volume = 0.2;document.getElementById('cry${idPoke}').play()" class="pkdx-icon-item" src="assets/img/icon/sound-icon.png" alt="">
                    <img onclick="closeInfo()" class="pkdx-icon-item" src="assets/img/icon/down-arrow-white.png" alt="">
                </div>

                <h3>${idPoke}</h3>
                <h1>${capitalizeFirstLetter(especie)}</h1>
                <div class="img-wrap pkdx-img">
                    <span class="px-border"><img src="https://img.pokemondb.net/sprites/${normal}" class="card-info-img"></span>
                    <span class="px-border"><img src="https://img.pokemondb.net/sprites/${shiny}" class="card-info-img"></span>
                </div>

                <div class="type-wrap">
                    <span class="tipo-pokemon">${tipos}</span>
                </div>

                <div class="descricao-wrap px-border">
                <span class="campo-descricao">${descricao}</span>
                <div class="base-info-wrap">
                    <ul class="status-ul">
                        <b>Base Status</b>
                        <li>hp: ${hp}</li>
                        <li>Ataque: ${atk}</li>
                        <li>Defesa: ${def}</li>
                        <li>Sp. Ataque: ${spatk}</li>
                        <li>Sp. Defesa: ${spdef}</li>
                        <li>Velocidade: ${spd}</li>
                    </ul>
                    <div class="info-wrap">
                        <ul>
                            <li><span><b>Altura: </b>${altura}</span></li>
                            <li><span><b>Peso: </b>${peso}</span></li>
                        </ul>
                    </div>

                </div>
                </div>

            </div>
            <audio style="display: none;" id="cry${idPoke}" controls>
                <source src="https://play.pokemonshowdown.com/audio/cries/${especie.replace("-","")}.ogg" type="audio/ogg">
            </audio>
        `;

  // setTimeout(() => {
  //   document.documentElement.scrollTop = 0;
  // }, 50);
}

function closeInfo() {
  pokemon_info.style.display = "none";
  pokemon_wrap.style.display = "flex";
}

function buscarTipoPokemon(pokemon) {
  var tipoPokemon = "";

  tipoPokemon += `<p class="px-small-corner" style="background-color: ${buscarCorTipo(
    pokemon.tipo1
  )}">${pokemon.tipo1}</p>`;
  if (pokemon.tipo2 != null)
    tipoPokemon += `<p class="px-small-corner" style="background-color: ${buscarCorTipo(
      pokemon.tipo2
    )}">${pokemon.tipo2}</p>`;

  return tipoPokemon;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function notFound() {
  pokemon_wrap.innerHTML = `<div class="not-found px-border">
            <img src="assets/img/icon/down-arrow.png">
            <span>Pokémon não encontrado!</span>
        <div>`;
}

function tocarAudio(id) {
  console.log(id);
}

function buscarCorTipo(type) {
  switch (type) {
    case "normal":
      return "#aaaa99";
    case "fogo":
      return "#ff4422";
    case "água":
      return "#3399ff";
    case "elétrico":
      return "#ffcc33";
    case "planta":
      return "#77cc55";
    case "gelo":
      return "#66ccff";
    case "lutador":
      return "#66ccff";
    case "venenoso":
      return "#aa5599";
    case "terra":
      return "#ddbb55";
    case "voador":
      return "#ddbb55";
    case "psíquico":
      return "#ff5599";
    case "inseto":
      return "#aabb22";
    case "pedra":
      return "#bbaa66";
    case "fantasma":
      return "#6666bb";
    case "dragão":
      return "#7766ee";
    case "sombrio":
      return "#775544";
    case "metálico":
      return "#aaaabb";
    case "fada":
      return "#ee99ee";
  }
}
