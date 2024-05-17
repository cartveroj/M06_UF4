
import { Link } from "react-router-dom";
import  "./styles/navbar.css"

const Navbar = () => {
    return (
        <>
        <nav className="navBar">
            <a to="">
                <img height='25px' width='25px' src='https://agora.xtec.cat/iticbcn/wp-content/uploads/usu2389/2023/06/Imagotipo-1.png' alt="logo" />
                 MovieZone
            </a>
                <Link to="/movies">Home</Link>
                <Link to="/movies/list">Lista peliculas</Link>
                <Link to="/movies/add">Añadir peliculas</Link>
                <Link to="/">Log out</Link>
        </nav>
        </>
        
    );
}

export default Navbar

