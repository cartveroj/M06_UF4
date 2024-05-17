import { useState } from "react";
import db from "../config/config";
import {collection , addDoc} from 'firebase/firestore'
import '../componentes/styles/card_list.css'
import Button from "./Button";

// componente que renderiza el formulario de añadir peliculas
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
      //metodo para recuperar el valor del input
      const handleChange = (e) =>{
        const {name, value} = e.target;
        setMovieData({...movieData, [name]:value})
      };

      //metodo que gestiona en el momento de submit del form
      //añade a la base datos
      const handleSubmit = (e) =>{
          e.preventDefault();
          const moviesRef = collection(db,"movies"); //referencia a la coleccion creada en la base de datos
          addDoc(moviesRef, movieData).then((doc)=>{
            console.log(doc.id)
            //limpia los campos de los inputs 
            setMovieData({
              title: "",
              description: "",
              director: "",
              image: "",
              rate: "",
              year: "",
              duration: ""
            });
          });

      };
    return (
      <>
      <div className="containerFormAdd">
      <h2>Añadir peliculas</h2>
        <form className="formAdd" onSubmit={handleSubmit}>
            <div>
                <label>Titulo:</label>
                <input name="title" type="text" 
                value={movieData.title} onChange={handleChange}/>
            </div>
            <div>
                <label>Descripcion:</label>
                <input name="description" type="text" 
                value={movieData.description} onChange={handleChange}/>
            </div>
            <div>
                <label>Director:</label>
                <input name="director" type="text" 
                value={movieData.director} onChange={handleChange}/>
            </div>
            <div>
                <label>Imagen url:</label>
                <input name="image" type="text"  
                value={movieData.image} onChange={handleChange}/>
            </div>
            <div>
                <label>Rate 1 a 5:</label>
                <input name="rate" type="text" 
                value={movieData.rate} onChange={handleChange}/>
            </div>
            <div>
                <label>Año:</label>
                <input name="year" type="text" 
                value={movieData.year} onChange={handleChange}/>
            </div>
            <div>
                <label>Duración (minutos):</label>
                <input name="duration" type="text" 
                value={movieData.duration} onChange={handleChange}/>
            </div>
            <Button type="submit" texto="Añadir"></Button>
        </form>
      </div>
        
      </>
    );
  };
  
  export default FormMovieAdd;