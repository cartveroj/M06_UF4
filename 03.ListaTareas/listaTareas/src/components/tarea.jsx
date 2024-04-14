
import { FaTimes } from 'react-icons/fa';
// definicion de estilos para el componente
const box = {
    border: '1px solid black', 
    padding: '10px', 
    color: 'black',
    width: 'fit-content',
  };

const estiloContainer = {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between'
};

const estiloTexto = {
    marginRight: '10px'
};

//Definicion del componente Tarea
//contiene solo el texto y un boton icono de eliminar
 
const Tarea = ({id, text, completada, completarTasca, eliminarTasca})=>
{
    const className = 'tascaCompletada'
    return(
        <>
        <div style={{... box, background: completada ? 'lightgreen' : 'white'} } >
            <div style={estiloContainer}>
                <div onClick={() => completarTasca(id)} className={completada ? className : ''}>
                    <p style={{...estiloTexto, textDecoration: completada ? 'line-through': 'none'}}>{text}</p>
                </div>
                <button onClick={() => eliminarTasca(id)}><FaTimes /></button>
            </div>
        </div>
        </> 
    );
}
export default Tarea;