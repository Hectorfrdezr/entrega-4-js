document.addEventListener("DOMContentLoaded", function() {

document.querySelector(".num").addEventListener("keypress",function(event){
    if (event.key === "Enter"){
        buscarPokemon();
    }
});

document.querySelector(".btn").addEventListener("click",buscarPokemon);

function buscarPokemon(){

const pokemon = document.querySelector(".num").value.toLowerCase();
const url =`https://pokeapi.co/api/v2/pokemon/${pokemon}`;fetch(url)
    .then(Response =>Response.json())
    .then(data => {
        showLetter(data);
        mostrarCard();
    })
    .catch(Error => {
        mostrarError("Tu pokemon no existe");
        mostrarCard();
        
});
}
function showLetter(data){
    let pokemonCard = document.querySelector("#pokemon-card");
    pokemonCard.innerHTML = "";

    let nombre = data.name;
    let imagen = data.sprites.front_default;
    let tipos = data.types.map(type => type.type.name).join(", ");
    let altura = data.height/10;
    let peso = data.weight/10;

    let cardHTML = `
    <h3>${nombre}</h3>
    <img src="${imagen}" alt="${nombre}">
    <p><strong>Tipo(s):</strong> ${tipos}</p>
    <p><strong>Altura:</strong> ${altura} m</p>
    <p><strong>Peso:</strong> ${peso} Kg</p>
`;

pokemonCard.innerHTML = cardHTML;
}

function mostrarError(mensaje) {
    let cardError = document.querySelector("#pokemon-card");
   cardError.innerHTML = `<h3>Error: ${mensaje}</h3>`;

   setTimeout(function() {
    cardError.innerHTML = '';
    ocultarCard();
}, 2000.);
;
}
function ocultarCard(){
    let card = document.querySelector(".card");
    card.style.display = `none`; 
}
function mostrarCard(){
    let card = document.querySelector(".card");
    card.style.display = "block";
}
ocultarCard();



});