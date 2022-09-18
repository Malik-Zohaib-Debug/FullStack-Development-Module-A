let searchText = document.getElementById('searchText');
let movies = document.getElementById('movies');
let submitBtn = document.getElementById('submitBtn');
let containerBody = document.getElementById('movieData');
const API_KEY = 'dc9303a2';

function getMovies(){
    const URL = `http://www.omdbapi.com/?s=${searchText.value}&apikey=${API_KEY}`
    fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let responseData = data.Search;
        movies.innerHTML = responseData.map((apiData) => 
            `<div class="movie">
                <div class="movie-thumbnail">
                    <img src=${apiData.Poster} alt="Movie-Poster">
                </div>
                <div class="movie-info">
                    <p>${apiData.Title}</p>
                </div>
                <div class="controlBtns">
                    <button id="selectBtn" onClick=movieSelected('${apiData.imdbID}')>Select Movie</button>
                </div>
            </div>`
        ).join('');
        console.log(responseData);
    })
    .catch((err) => {
        console.log(err);
    })
}

function movieSelected(id){
    sessionStorage.setItem('movieID', id);
    window.location = 'movie.html';
    return false;
}

function getMovie(){
    let movieID = sessionStorage.getItem('movieID');
    fetch(`http://www.omdbapi.com/?i=${movieID}&apikey=dc9303a2`)
    .then((response) => {
        return response.json();    
    })
    .then((data) => {
        console.log(data);
        containerBody.innerHTML =  
        `
        <div class="container">
        <div class="img-section">
                <img src="${data.Poster}" alt="${data.Title}">
            </div>
            <div class="info-section">
                <p id="movie-name">${data.Title}</p>
                <div class="movie-details">
                    <p>Genre: <span>${data.Genre}</span></p>
                    <p>Released: <span>${data.Released}</span></p>
                    <p>Rated: <span>${data.Rated}</span></p>
                    <p>Director: <span>${data.Director}</span></p>
                    <p>Writer: <span>${data.Writer}</span></p>
                    <p>Actor: <span>${data.Actors}</span></p>
                </div>
            </div>
        </div>
        </br>
        <div class="plot-section">
            <p id="plot-head">Plot</p>
            <p id="plot-details">${data.Plot}</p>
            <div class="btnControllers">
                <a id="viewIMDB" href="http://imdb.com/title/${data.imdbID}" target="_blank">View IMDB</a>
                <a id="backBtn" href="/index.html">Go Back To Search</a>
            </div>
        </div>
        </div>
        `
    }).catch((err) => {
        console.log(err);
    })
}

submitBtn.addEventListener('click', getMovies);

