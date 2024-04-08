/* eslint-disable no-unused-vars */
import { FaPlus } from 'react-icons/fa';
import { useState } from 'react'

function FormTareas(props){
    const[tasques, setTextTasca]= useState([]);
    const textTasca = '';

    const canviTextTasca = e => {
        setTextTasca(e.target.value);
        console.log('value is:', e.target.value);
        };
    const enviarForm = e => {
        e.preventDefault();
        const tascaNova= {
        titol: {textTasca},
        completada: false
        }
        props.funcAñadir(tascaNova);
    }
    return(
        <>
        <input type="text" />
        <button type='submit'><FaPlus></FaPlus></button>
        </>
    );
}

export default FormTareas;