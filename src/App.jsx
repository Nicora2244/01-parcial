import React from 'react';
import { ReactDOM } from 'react';

function App(){
    return <hi> Hola Mundo </hi>
}

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)