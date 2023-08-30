import React, { useState } from 'react';

const CalcularCostoLlamada = () => {
  const [minutos, setMinutos] = useState(0);
  const [costoTotal, setCostoTotal] = useState(0);

  const manejoValorMinutos = (e) => {
    const value = e.target.value;

    if (!isNaN(value)) {
      setMinutos(value);
    }
  };

  const calcularCosto = () => {
    let costo;

    if (minutos < 3) {
      costo = 100;
    } else {
      costo = 100 + (minutos - 3) * 50;
    }

    console.log(`${costo}`);

    setCostoTotal(costo);
  };

  return (
    <div>
      <h1>Calculadora de Coste de Llamada</h1>
      <input
        type="number"
        value={minutos}
        onChange={manejoValorMinutos}
        placeholder="Ingrese duración de la llamada en minutos"
      />
      <button onClick={calcularCosto}>Calcular Costo</button>
      <p>Coste total: {costoTotal} pesos</p>
    </div>
  );
};

export default CalcularCostoLlamada;