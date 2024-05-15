const container = document.querySelector(".container");


fetch(`https://pokeapi.co/api/v2/pokemon/1`)
.then(Response => Response.json())
.then(data => container.innerHTML =`
    
`)
.catch(error => console.error(error));
