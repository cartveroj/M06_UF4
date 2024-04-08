/* eslint-disable react/prop-types */
//import React from 'react';


//Componente que retorna un boton 
function MyBoton (props) {

  // eslint-disable-next-line react/prop-types
  const className = props.esClick ? 'btnClick' : 'btnReiniciar';

  return (
    <button className={className} onClick={props.onClick}>{props.text}</button>
  );

}


export default MyBoton;