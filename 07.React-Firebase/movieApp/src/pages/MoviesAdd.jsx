import FormMovieAdd from "../componentes/MoviesAdd";
import Navbar from "../componentes/Navbar";
//Pagina donde se renderiza el formulario para añadir peliculas
const MovieAdd = () => {
    return (
        <>
        <Navbar/>
        <div>
            <FormMovieAdd></FormMovieAdd>
        </div>
        </>
      
    );
  };
  
  export default MovieAdd;