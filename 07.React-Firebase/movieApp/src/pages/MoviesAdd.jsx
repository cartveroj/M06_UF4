import Button from "../componentes/Button";
import FormMovieAdd from "../componentes/MoviesAdd";
const MovieAdd = () => {
    return (
        <>
        <div>
            <FormMovieAdd></FormMovieAdd>
        </div>
        <br></br>
        <div>
       <Button label="Go back"></Button>
        </div>
        </>
      
    );
  };
  
  export default MovieAdd;