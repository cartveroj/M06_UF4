/* eslint-disable react/prop-types */
import "../componentes/styles/card_list.css"
import Button from "./Button";

const MovieCard = ({ title, img, rate, Description, onDelete,movieId }) => {
    return (
      <div>
           <div className="movieCard">
          <h2>{title}</h2>
          <img src={img} alt={title} />
          <p>Rate: {rate}/5</p>
          <p>Descripcion: {Description}</p>
          <Button type="text" onClick={() => onDelete(movieId)} texto="Eliminar"></Button>
        </div>
      </div>
     
    );
  };
  
  export default MovieCard;
