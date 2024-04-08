/* eslint-disable react/prop-types */
import { FaTimes } from 'react-icons/fa';
const box = {
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px',
    display: 'inline-block',
  };
const Tarea = ({id, text, completada, completarTasca, eliminarTasca})=>
{
    // eslint-disable-next-line react/prop-types
    const className = 'tascaCompletada'
    return(
        <>
        <div style={box} onClick={completarTasca} id={id} className={completada?className:''}>
            <p>{text}</p>
            <button onClick={eliminarTasca}><FaTimes></FaTimes></button>
        </div>
        </>
    );
}
export default Tarea;