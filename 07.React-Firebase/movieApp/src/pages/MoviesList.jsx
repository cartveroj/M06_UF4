import Button from "../componentes/Button";
import { useEffect, useState } from "react";
import { initializeApp } from 'firebase/app';
import firebaseConfig from "../config/config";
import MovieCard from "../componentes/MovieCard";
const MovieList = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      //  firebase.initializeApp(firebaseConfig);
        const app = initializeApp(firebaseConfig);
        const db = app.firestore();
        db.collection("movies").onSnapshot((snapshot) => {
          const movieList = [];
          snapshot.forEach((doc) => {
            movieList.push({ id: doc.id, ...doc.data() });
          });
          setMovies(movieList);
        });
      }, []);
    return(
        <>
            <h2>Llistat de pel·lícules</h2>
            {movies.map((movie) => (
                <MovieCard
                key={movie.id}
                title={movie.title}
                image={movie.image}
                rate={movie.rate}
                direction={movie.direction}
                />
            ))}
            <div>
                <Button label="Go back"></Button>
            </div>
        
        </>
    );
}

export default MovieList;