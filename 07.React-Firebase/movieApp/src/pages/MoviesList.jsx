/* eslint-disable no-unused-vars */

import "../componentes/styles/card_list.css"
import Navbar from "../componentes/Navbar";
import { useEffect, useState } from "react";
import db from "../config/config";
import MovieCard from "../componentes/MovieCard";
import { collection , deleteDoc, doc, getDocs} from "firebase/firestore";

//Pagina que recupera de la base de datos
//mapea los resultados y muestra las peliculas

const MovieList = () => {

     const [movies, setMovies] = useState([]);

     const moviesRef = collection(db, "movies"); //referenciamos la coleccion de la base de datos
    
     useEffect(() => {
        getDocs(moviesRef) //metodo que contiene la libreria firebase
        .then((resp)=>{
            setMovies(
                resp.docs.map((doc)=>{
                    return {...doc.data(), id:doc.id} //añadimos a setMovies
                })
            );
        })

       }, []);

      //metodo que elimina movies recibe la id como parametro
       const handleDelete = (movieId) =>{
        const movieRefId = doc(db,"movies",movieId);
        deleteDoc(movieRefId) 
        .then(()=>{
            console.log("Película eliminada exitosamente"); 
            setMovies(movies.filter((movie) => movie.id !== movieId)); //volvemos a setear las movies

        });
    }

    return(
        <>
            <Navbar/>
            <h2>Llistat de pel·lícules</h2>
            <div className="containerList">
            {movies.map((movie) => ( //mapeamos al componente de movieCard
                <MovieCard 
                key={movie.id}
                title={movie.title}
                img={movie.image}
                rate={movie.rate}
                Description={movie.description}
                onDelete={handleDelete}
                movieId={movie.id}
                />
            ))}
            </div>
           
        
        </>
    );
}

export default MovieList;

