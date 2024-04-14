/* eslint-disable no-unused-vars */
//import React from 'react';
import { useState } from 'react'
import FormTareas from './formTareas';
import Tarea from './tarea';
//Componente que se encarga de contener el formTarea y de este renderizar las tareas
function ListadoTareas () {

  const[tareas, setTareas]= useState([]);

  const añadirTarea = tarea => {
    console.log(tarea)
    const tareasActuales = [...tareas, tarea];
    console.log(tareasActuales)
    setTareas(tareasActuales)
  }

  const eliminarTarea = id => {
    const tasquesRestants = tareas.filter((tarea, index) => index !== id);
    setTareas(tasquesRestants);
}


   const completarTarea = id => {

       const tasquesActuals = tareas.map((tarea,index)=>{
          if(index === id){
               return{...tarea, completada:true}
           }
           return tarea;
       })
       setTareas(tasquesActuals);
   }

  return (
    <>
    <h1>Mis tareas</h1>
    <FormTareas funcionAñadir = {añadirTarea} > </FormTareas> 
    <br />
      {tareas.map((tasca, index) => (
            <Tarea 
                key={index}
                id={index} 
                text={tasca.text} 
                completada={tasca.completada} 
                completarTasca={completarTarea} 
                eliminarTasca={eliminarTarea}
            />
       
        ))}
     
    </>
  );

}


export default ListadoTareas;