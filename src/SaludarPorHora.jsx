import React, { useState } from 'react';

const SaludarPorHora = () => {
  const [nombre, setNombre] = useState('');
  const [hora, setHora] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarNombre = (e) => {
    setNombre(e.target.value);
  };

  const manejarHora = (e) => {
    setHora(e.target.value);
  };

  const generarSaludo = () => {
    let saludo = '';
    const horaInt = parseInt(hora, 10);

    if (isNaN(horaInt) || horaInt < 0 || horaInt > 23) {
      saludo = 'Hora no válida';
    } else if (horaInt >= 6 && horaInt < 12) {
      saludo = 'Buenos días';
    } else if (horaInt >= 12 && horaInt < 18) {
      saludo = 'Buenas tardes';
    } else {
      saludo = 'Buenas noches';
    }

    setMensaje(`${saludo}, ${nombre}`);
    console.log(`${saludo}, ${nombre}`)
  };

  

  return (
    <div>
      <h1>Saludo por hora</h1>
      <input
        type="text"
        value={nombre}
        onChange={manejarNombre}
        placeholder="Ingrese su nombre"
      />
      <input
        type="number"
        min="0"
        max="23"
        value={hora}
        onChange={manejarHora}
        placeholder="Ingrese la hora (0-23)"
      />
      <button onClick={generarSaludo}>Generar Saludo</button>
      <p>{mensaje}</p>
    </div>
  );
};

export default SaludarPorHora;