import React from 'react';
import imagen1 from './imagenes/imagen1.jpg'; // Importa la imagen
import './MiComponente.css'; // Si quieres darle estilos

function MiComponente() {
  return (
    <div>
      <h2>Este es mi propio componente</h2>
      <p>Estoy aprendiendo React paso a paso.</p>
      <img src={imagen1} alt="Descripción de la imagen" className="imagen-mi-componente"/>
    </div>
  );
}

export default MiComponente;

