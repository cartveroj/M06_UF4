import { useState } from 'react'
import './App.css'
import MyBoton from './components/boton'
import BoxCounter from './components/boxCounter';
function App() {
  const [numClicks, SetNumClicks] = useState(0);
  //metodo que aumenta el numero de clicks
  const aumentarNumClicks = () => {
    SetNumClicks(numClicks + 1);
    console.log("Se incrementa el contador en 1")
  };
//metodo que reinicia el numero de clicks a cero
  const reiniciarNumClicks = () => {
    SetNumClicks(0);
    console.log("Se reinicia el contador a 0")
  };

  return (
    <div>
      <h1>Contador</h1>
      <BoxCounter valor={numClicks} ></BoxCounter>
      <br />
      <MyBoton text="Click"  esClick={true} onClick={aumentarNumClicks} />
      <br />
      <MyBoton text="Reiniciar" esClick={false} onClick={reiniciarNumClicks} />
    </div>
  );

}

export default App
