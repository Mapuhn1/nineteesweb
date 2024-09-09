// creating a movie object

//this was step 1
const myMovieData = {
    id: 1,
    title: "Rear Window",
    director: "Alfred Hitchcock",
    year: 1955,
    genre: [
        "Mystery",
        "Thriller"
    ],
    rating: 10,
    starring: [
        "James Stewart",
        "Grace Kelly"
    ]
};

async function getMovies(){
    const response = await fetch ("https://web1-z04e.onrender.com/movies");
    const fetchedMovies = await response.json();
    displayMovies(fetchedMovies) // for testing purposes
}
getMovies(); //don't forget to call function!! 


//this was step 2
function displayMovies(moviesData){
    for(movie of moviesData){
        
        const movieCard = document.createElement("div");
        movieCard.innerHTML = `
        <h2>Title : ${movie.title}</h2>
        <p class = "movie-date"> Date : ${movie.year}</p>
        <p class = "director"> Director : ${movie.director}</p>
        <p class = "rating"> Rating : <strong>${movie.rating}</strong></p>
        <p class = "genre"> Genre: ${movie.genre}</p>
        <p class = "starring"> Starring:${movie.starring}</p>
        
        `;
        webpage.appendChild(movieCard); //without appending the element we made it will not print on the screen

    }
}

const webpage = document.querySelector("body");
const actorList = document.createElement("ul");

for (const actors of myMovieData.starring) {
    const actorItem = document.createElement("li");
    actorItem.innerHTML = actors;
    actorList.appendChild(actorItem);
  
}

//we started off by making the movie card then showed it in a card then made the display movies and from there thats when we then made the function to fetch the data on the given api
//movieCard.appendChild(actorList);  commenting it out for now since its not available in the global scope
//homework is to the the actors and genre showing on the cards


//form elements flex-box grid . css!!!!