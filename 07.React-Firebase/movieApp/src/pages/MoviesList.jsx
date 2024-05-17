/* eslint-disable no-unused-vars */
import Button from "../componentes/Button";
import "../componentes/styles/card_list.css"
import Navbar from "../componentes/Navbar";
import { useEffect, useState } from "react";
import db from "../config/config";
import MovieCard from "../componentes/MovieCard";
import { collection , deleteDoc, doc, getDocs} from "firebase/firestore";


const MovieList = () => {
     const [movies, setMovies] = useState([]);
     const moviesRef = collection(db, "movies");
     useEffect(() => {
        getDocs(moviesRef)
        .then((resp)=>{
            setMovies(
                resp.docs.map((doc)=>{
                    return {...doc.data(), id:doc.id}
                })
            );
        })

       }, []);

      const handleDelete = (movieId) =>{
        const movieRefId = doc(db,"movies",movieId);
        deleteDoc(movieRefId)
        .then(()=>{
            console.log("Película eliminada exitosamente"); 
            setMovies(movies.filter((movie) => movie.id !== movieId));

        });
    }

       console.log(movies)
    return(
        <>
            <Navbar/>
            <h2>Llistat de pel·lícules</h2>
            <div className="containerList">
            {movies.map((movie) => (
                <MovieCard 
                key={movie.id}
                title={movie.title}
                img={movie.image}
                rate={movie.rate}
                Description={movie.description}
                onDelete={handleDelete}
                movieId={movie.id}                />
            ))}
            </div>
           
        
        </>
    );
}

export default MovieList;

