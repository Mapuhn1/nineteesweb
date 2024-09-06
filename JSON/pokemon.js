    // method for fetching the api data
    async function pokeData(){

        const requestUrl = "https://pokeapi.co/api/v2/pokemon/ditto";
        const response = await fetch (requestUrl);
        const pokemonsText = await response.text();

        const pokemons = JSON.parse(pokemonsText);
        //console.log(response);

        populatePokes(pokemons);
    }

    // method to write out pokemons to the page
        function populatePokes(obj){
            const body = document.querySelector("body");
            
            const pokes = obj.members; 

            // loop to display 10 pokemon names and their urls on page
            for(const poke in pokes){
                // console.log(poke.name)
                const myArticle = document.createElement("article");
                myArticle.innerHTML =
                <h2>${poke.name}</h2>,
                <p>URL: ${poke.url}</p>
                ;
               
                body.appendChild(myArticle);
            }
            
        }


   
    pokeData();


document.getElementById("btn").addEventListener("click", function PokeYay(){

})