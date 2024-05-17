/* eslint-disable react/prop-types */
import "../componentes/styles/card_list.css"
import Button from "./Button";
//componente que renderiza el objeto recuperado de la base de datos 

const MovieCard = ({ title, img, rate, Description, onDelete,movieId }) => {
    return (
      <div>
           <div className="movieCard">
          <h2>{title}</h2>
          <img src={img} alt={title} />
          <p><b>Rate: </b>{rate}/5</p>
          <p><b>Descripcion:</b> {Description}</p>
          <Button type="text" onClick={() => onDelete(movieId)} texto="Eliminar"></Button>
        </div>
      </div>
     
    );
  };
  
  export default MovieCard;
