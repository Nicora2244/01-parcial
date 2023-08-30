import React from 'react';
import ConvertidorTiempo from './ConvertidorTiempo';
import CalcularCostoLlamada from './CalcularCostoLlamada';
import SaludarPorHora from './SaludarPorHora';

function App() {
  return (
    <div>
      <h1>Aplicación principal</h1>
      <ConvertidorTiempo />
      <CalcularCostoLlamada />
      <SaludarPorHora />
    </div>
  );
}

export default App;
