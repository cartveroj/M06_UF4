/* eslint-disable react/prop-types */
import Card from "../componentes/Card";
import Navbar from "../componentes/Navbar";
import Welcome from "../componentes/Welcome";
import "../componentes/styles/card_list.css"

//Pagina Home que renderiza diferentes componentes
const Home = ({user}) => {

  return (
    <div>
      <Navbar/>
      <Welcome user={user}/>
      <div className="card-container">
        <Card title="Lista de peliculas" link="/movies/list"></Card>
        <Card title="Añadir peliculas" link="/movies/add"></Card>  
      </div>
     
    </div>
  );
};

export default Home;
