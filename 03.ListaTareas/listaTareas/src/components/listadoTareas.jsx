/* eslint-disable no-unused-vars */
//import React from 'react';
import { useState } from 'react'
import FormTareas from './formTareas';
import Tarea from './tarea';

function ListadoTareas () {
  const[tasques, setTasques]= useState([]);
  
  const añadirTareas = tasca => {
    const tareasActuales = [...tasques, tasca]
    setTasques(tareasActuales);
    console.log(tareasActuales)
  };

  const eliminarTasca = id => {
    const tasquesRestants = tasques.filter((tasca, index) => index !== id);
    setTasques(tasquesRestants);
    }

    const completarTasca = id => {
        const tasquesActuals = tasques.map((tasca,index)=>{
            if(index === id){
                return{...tasca, completada:!tasca.completada}
            }
            return tasca;
        })
        setTasques(tasquesActuals);
        }
  return (
    <>
    <h1>Mis tareas</h1>
    <FormTareas funcAñadir={añadirTareas}>
        {tasques.map((tasca, index)=>{
            <Tarea
            key={index}
            id={index}
            text={tasca.text}
            completada={tasca.completada}
            completarTasca={completarTasca}
            eliminarTasca={eliminarTasca}
            ></Tarea>
        })}
    </FormTareas>
    </>
    
  );

}


export default ListadoTareas;