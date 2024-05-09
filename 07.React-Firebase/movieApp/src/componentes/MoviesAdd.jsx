
import firebaseConfig from "../config/config";
import { initializeApp } from 'firebase/app';
import { useState } from "react";
import "firebase/firestore";



const FormMovieAdd = () => {
    const [movieData, setMovieData] = useState({
        title: "",
        description: "",
        director: "",
        image: "",
        rate: "",
        year: "",
        duration: ""
      });

      const handleChange = (e) =>{
        const {name, value} = e.target;
        setMovieData({...movieData, [name]:value})
      };

      const handleSubmit = (e) =>{
        e.preventDefault();
        const app = initializeApp(firebaseConfig);
         const db = app.firestore();
         db.collection("movies").add(movieData);
      };
    return (
      <>
        <h2>Añadir peliculas</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Titulo:</label>
                <input name="title" type="text" value={movieData.title} onChange={handleChange}/>
            </div>
            <div>
                <label>Descripcion:</label>
                <input name="description" type="text" value={movieData.description} onChange={handleChange}/>
            </div>
            <div>
                <label>Director:</label>
                <input name="director" type="text" value={movieData.director} onChange={handleChange}/>
            </div>
            <div>
                <label>Imagen url:</label>
                <input name="image" type="text"  value={movieData.image} onChange={handleChange}/>
            </div>
            <div>
                <label>Rate 1 a 5:</label>
                <input name="rate" type="text" value={movieData.rate} onChange={handleChange}/>
            </div>
            <div>
                <label>Año:</label>
                <input name="year" type="text" value={movieData.year} onChange={handleChange}/>
            </div>
            <div>
                <label>Duración (minutos):</label>
                <input name="duration" type="text" value={movieData.duration} onChange={handleChange}/>
            </div>
            <br></br>
            <button type="submit">Añadir</button>
        </form>
      </>
    );
  };
  
  export default FormMovieAdd;