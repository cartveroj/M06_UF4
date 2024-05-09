import Button from "../componentes/Button";
import Card from "../componentes/Card";
import Welcome from "../componentes/Welcome";

const Home = () => {
  return (
    <div>
      <Welcome></Welcome>
      <Card title="Lista de peliculas" link="/movies/list"></Card>
      <Card title="Añadir peliculas" link="/movies/add"></Card>
      <Button to="/" label="Exit"></Button>
    </div>
  );
};

export default Home;
