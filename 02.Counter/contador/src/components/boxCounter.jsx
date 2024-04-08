import React from 'react';

// estilos del texto 
const boxText = {
  backgroundColor: '#f0f0f0',
  border: '1px solid #ccc',
  padding: '10px',
  borderRadius: '5px',
  display: 'inline-block',
};

// Componente para mostrar el número de clics
function BoxCounter(props){
    return (
        <div style={boxText}>
          <p>Numero de clicks: {props.valor}</p>
        </div>
      );
}

export default BoxCounter;