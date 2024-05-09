
import { useLocation } from 'react-router-dom';

const Welcome = () => {
  const { state } = useLocation();

  return (
    <div>
      <h1>Bienvenido, {state.name}</h1>
      <p>Peliculas para el verano!</p>
    </div>
  );
};

export default Welcome;
