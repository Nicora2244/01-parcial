import React, { useState } from 'react';

const ConvertidorTiempo = () => {
    const [segundos, setSegundos] = useState(0);
    const [tiempoConvertido, setTiempoConvertido] = useState('');

    console.log(segundos);

    const manejoValorDiferente = (e) => {
        const value = e.target.value; 
        
        
        if (!isNaN(value)){
            setSegundos(value);
        }
    }

const convertirTiempo = (evt) => {
    const { target, value } = evt;
    const segundosIngresados = parseInt(target.value || value || segundos, 10);

    const hrs = Math.floor(segundosIngresados / 3600);
    const mins = Math.floor((segundosIngresados % 3600) / 60);
    const secs = Math.floor(segundosIngresados % 60);

    setTiempoConvertido(` ${hrs} horas, ${mins} minutos y ${secs} segundos`);
}



return (
    <div>
        <h1>Conversor de Tiempo</h1>
        <input
            type = "number"
            value = {segundos}
            onChange = {manejoValorDiferente}
            placeholder = "Ingrese tiempo en segundos"
        />
        <button onClick={(evt) => convertirTiempo(evt)}>Convertir</button>
        <p>{tiempoConvertido}</p>
    </div>
);
};

export default ConvertidorTiempo;