import React from 'react';
import './App.css';
import MiComponente from './MiComponente';

function App() {
  return (
    <div className="App">
      <h1>¡Hola Mundo con React!</h1>
      <MiComponente />
      <button onClick={() => alert('¡Haz hecho clic!')}>
        Haz clic aquí
      </button>
    </div>
  );
}

export default App;
