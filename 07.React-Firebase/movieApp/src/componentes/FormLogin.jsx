import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormLogin = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/movies', { state: { name } });
  };

  return (
    <div>
      <h1>Bienvenido a MovieZone</h1>
      <form onSubmit={handleSubmit}>
        <label>Ingresa tu nombre:</label>
        <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        <br />
        <br />
        <button type="submit">Ir a Home</button>
      </form>
    </div>
  );
};

export default FormLogin;
