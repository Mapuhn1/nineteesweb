
async function getPokemons() {

    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    const fetchedPokemon = await response.json();
    console.log(fetchedPokemon);
    displayPokemon(fetchedPokemon)

}
getPokemons();
const webpage = document.querySelector("body");


function displayPokemon(pokemons) {
    for (poke of pokemons.results) {
        const pokeCard = document.createElement("div");
        pokeCard.innerHTML = poke.name;
    

       
       pokeCard.url = poke.url;
       console.log(pokeCard.url)
       
       document.querySelector("body").appendChild(pokeCard);
       
       pokeCard.addEventListener("click", getPokemon)
    }

}

async function getPokemon(e){
    const response = await fetch(e.target.url);
    const fetchedPokemon = await response.json();
    displayOnePoke(fetchedPokemon);
}
 function displayOnePoke(show){
    //create, edit append
    const poke1 = document.createElement("div");
    poke1.innerHTML =`` ;

    const pokeName = document.createElement("h2");
    poke1.appendChild(pokeName);
 }


