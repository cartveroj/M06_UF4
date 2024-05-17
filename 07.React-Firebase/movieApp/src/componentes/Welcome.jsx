//componente que recibe por parametro el nombre del usuario 

const Welcome = ({ user }) => {
  return (
    <div>
      <h1>Bienvenido {user}</h1>
      <p>Peliculas para el verano!</p>
    </div>
  );
};

export default Welcome;
