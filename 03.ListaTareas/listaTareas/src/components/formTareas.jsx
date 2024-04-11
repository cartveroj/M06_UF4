import { FaPlus } from 'react-icons/fa';
import { useState } from 'react'

function FormTareas(props){

    const[textTasca, setTextTasca]= useState('');

    const canviTextTasca = e => {
        setTextTasca(e.target.value);
        };
    const enviarForm = e => {
        e.preventDefault();
        const tascaNova= {
        text: textTasca,
        completada: false
        }
        console.log(tascaNova);
        props.funcionAñadir(tascaNova);
        setTextTasca('');
    }
    return(
        <>
        <form onSubmit={enviarForm}>
            <div style={{alignItems: 'center' }}>
                <input style={{height:'25px', marginRight: '10px'}} placeholder="introduzca una tarea" value={textTasca} onChange={canviTextTasca} type="text" />
                <button type='submit' ><FaPlus></FaPlus> Añadir tarea</button>
            </div>
            
        </form>
        </>
    );
}

export default FormTareas;