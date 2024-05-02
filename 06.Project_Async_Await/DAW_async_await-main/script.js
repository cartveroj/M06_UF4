// Claus
const keys = {
    api_key: '',
    session_id: '1155168f61b44fd18932c21ee09daf09042e5f58',
    account_id: '21215406',
    token_id:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjkzYjUxNGM2YjFjMDhjOTUxMTIxYjY4ZDk4YzEyZSIsInN1YiI6IjY2MWQ1NjFlY2ZmZWVkMDE2MzkxNTUzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.96UM1tgLBxsGYbEQx0K9cngy2jjqLeaxaTIUGlBwrtM'
}


let moviesResult = document.getElementById("moviesResult");
var total_pages = 0;
var current_page = 1;

let isSearching = false; 
let firstQuery = "";

/* Se encarga de ir cargando las movies a medida que se termina de ver el contenido */
window.addEventListener('scroll', async () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (!isSearching && scrollTop + clientHeight >= scrollHeight - 5 && current_page < total_pages) {
      showLoadingGif(); 
      searchMovies(firstQuery);
      console.log(current_page)
      hideLoadingGif();
  }
});

/*Funcion que se encarga de añadir a favoritos las movies */
function setFav(id, favBool){

    moviesResult.innerHTML="";
    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: keys.token_id,
        },
        body: JSON.stringify({media_type: 'movie', media_id: id, favorite: favBool})
      };
      
      fetch(`https://api.themoviedb.org/3/account/21215406/favorite?session_id=${keys.session_id}`, options)
        .then(response => response.json())
        .then(response => {
          console.log("movie id: "+id+ " marked as: "+favBool)
        })
        .catch(err => console.error(err));
    showFavs();    //volvemos a mostrar las pelis favoritas
    firstQuery=""; //borramos el parametro de busqueda para que no se ejecute el search 
    
}

//Funcion que se encarga de hacer la llamada a la api y mostrar por pantalla
async function showFavs(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: keys.token_id
        }
      };
      
      const response = await fetch(`https://api.themoviedb.org/3/account/${keys.account_id}/favorite/movies?session_id=${keys.session_id}&sort_by=created_at.asc`, options)
      const data = await response.json();
      for(const movie of data.results){
        printMovie(movie, true, false);
      }
}


/*Funcion que busca las movies  */
async function searchMovies(query){
     clearInput();
     removeActive();
     isSearching = true;

     if (firstQuery != query) {
      current_page = 1;
      moviesResult.innerHTML="";
   } 
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: keys.token_id
        }
      };
      firstQuery = query;
      
      console.log("current_Page: "+current_page);
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?&query=${encodeURIComponent(query)}&include_adult=true&language=en-US&page=${current_page}&`, options);
      const data = await response.json();
      total_pages = data.total_pages;
      current_page++; //aumentamos la pagina para que en la siguiente busqueda se actualice 
      console.log("total_pages: "+total_pages);
      for(const movie of data.results){

        let isFavorite = await checkIfFavorite(movie.id); //verificamos si es favorito o no
        printMovie(movie, isFavorite, false);
      }
   
      isSearching = false; 
}

/*Funcion que se encarga de verificar si esta en favoritos o no la movie */
async function checkIfFavorite(movieId) {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: keys.token_id
      }
    };
    
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/account_states`, options)
    const data = await response.json();
    return data.favorite;
}

/*Funciones que muestran el spinner */
function showLoadingGif() {
    document.getElementById('loading-spinner').style.display = 'block';
}

function hideLoadingGif() {
    document.getElementById('loading-spinner').style.display = 'none';
}


/* FUNCIONS D'INTERACCIÓ AMB EL DOM */

// Click Favorites
document.getElementById("showFavs").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");
    showFavs();
})

// Click Watchlist
document.getElementById("showWatch").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");

    //showWatch();
})

/* Funcions per detectar la cerca d'una pel·lícula */
// Intro a l'input
document.getElementById("search").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchMovies(this.value);
    }
});

// Click a la lupa
document.querySelector(".searchBar i").addEventListener("click", ()=>{
  searchMovies(document.getElementById("search").value)
});

// Netejar l'input
document.getElementById("search").addEventListener('click', ()=>clearInput()); 

function clearInput(){
    document.getElementById("search").value="";
}

// Elimina l'atribut active del menú
function removeActive(){
    document.querySelectorAll(".menu li a").forEach(el=>el.classList.remove("active"));
}

/* Funció per printar les pel·lícules */
function printMovie(movie, fav, watch){
   
    let favIcon = fav ? 'iconActive' : 'iconNoActive';
    let watchIcon = watch ? 'iconActive' : 'iconNoActive';

    moviesResult.innerHTML += `<div class="movie">
                                    <img src="https://image.tmdb.org/t/p/original${movie.poster_path}">
                                    <h3>${movie.original_title}</h3>
                                    <div class="buttons">
                                        <a id="fav" onClick="setFav(${movie.id}, ${!fav})"><i class="fa-solid fa-heart ${favIcon}"></i></a>
                                        <a id="watch" onClick="setWatch(${movie.id}, ${!watch})"><i class="fa-solid fa-eye ${watchIcon}"></i></a>
                                    </div>`;
}

