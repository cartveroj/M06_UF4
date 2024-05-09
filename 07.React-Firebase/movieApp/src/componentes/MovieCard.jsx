/* eslint-disable react/prop-types */

const MovieCard = ({ title, img, rate, direction }) => {
    return (
      <div>
        <h2>{title}</h2>
        <img src={img} alt={title} />
        <p>Rate:{rate}</p>
        <p>Direction:{direction}</p>
      </div>
    );
  };
  
  export default MovieCard;