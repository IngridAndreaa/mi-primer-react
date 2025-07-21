import React from 'react';
import './Tarjeta.css';

function Tarjeta(props) {
  return (
    <div className="tarjeta">
      <h3>{props.titulo}</h3>
      <img src={props.imagen} alt={props.titulo} className="imagen-tarjeta"/>
      <p>{props.contenido}</p>
    </div>
  );
}

export default Tarjeta;

