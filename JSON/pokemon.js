const pokeCard = document.querySelector("body");

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
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10/sprites");
    const fetchedPokemon = await response.json();
    pokeCard.innerHTML= ``;
    displayOnePoke(fetchedPokemon);
}
 function displayOnePoke(pokes){
    //create, edit append
    for (poke of pokes.results){
        const poke1 = document.createElement("div");
        poke1.innerHTML =`
        <h2>${poke.name}</h2>
        <img src =${poke.sprite}</img>
        <p> ${poke.url}</p>
        ` ;
        //const pokeCard = document.querySelector("body");
        pokeCard.appendChild(poke1);

        const pokeName = document.createElement("h2");
        poke1.appendChild(pokeName);
    }

 }


