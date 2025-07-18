import React from 'react';
import './Tarjeta.css';

function Tarjeta(props) {
  return (
    <div className="tarjeta">
      <h2>{props.titulo}</h2>
      <p>{props.contenido}</p>
    </div>
  );
}

export default Tarjeta;
