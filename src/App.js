import React, { useState } from 'react';
import './App.css';
import MiComponente from './MiComponente';
import Tarjeta from './Tarjeta';
import imagen1 from './imagenes/foto1.jpg';
import imagen2 from './imagenes/foto2.jpg';
import imagen3 from './imagenes/foto3.jpg';


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
     
       <div className="contenedor-tarjetas">
        <Tarjeta 
          titulo="Miss Molly" 
          contenido="Se ve linda pero es mañosa XD"
          imagen={imagen1}
        />
        <Tarjeta 
          titulo="Miss Candy" 
          contenido="Se ve agresiva pero es muy Zen :)"
          imagen={imagen2}
        />
        <Tarjeta 
          titulo="Las reinas del hogar <3" 
          contenido="Pinky y Cerebro version pewas :D"
          imagen={imagen3}
        />
        </div>
      <p>&copy; 2025 Agnesline Accesorios. Todos los derechos reservados.</p>
    </div>
  );
}

export default App;
