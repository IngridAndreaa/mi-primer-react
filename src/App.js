import React, { useState } from 'react';
import './App.css';
import MiComponente from './MiComponente';
import Tarjeta from './Tarjeta';


function App() {
  const [contador, setContador] = useState(0);

  return (
    <div className="App">
      <h1>¡Hola Mundo con React!</h1>
      <MiComponente />

      <button onClick={() => alert('¡HOLA, SONRIE!')}>
        Haz clic aquí
      </button>
      
      <div className="botones-contador">
        <h2>Contador: {contador}</h2>
        <button onClick={() => setContador(contador + 1)}>Sumar</button>
        <button onClick={() => setContador(contador - 1)}>Restar</button>
        <button onClick={() => setContador(0)}>Reiniciar</button>
      </div>
     
       
      <Tarjeta titulo="Tarjeta 1" contenido="Este es el contenido de la primera tarjeta" />
      <Tarjeta titulo="Tarjeta 2" contenido="Otro contenido diferente" />

    </div>
  );
}

export default App;
