/* eslint-disable react/prop-types */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const FormLogin = ({setUser}) => {

  const [name, setName] = useState('') ;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(name)
    navigate('/movies');
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
        <Button type="submit" texto="ir a Home"></Button>
      </form>
    </div>
  );
};

export default FormLogin;
