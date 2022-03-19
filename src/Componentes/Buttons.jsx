import React from 'react';

const BotonAzul = () => {
    return (
        <a className='btn btn-primary' href="http://miportafolio.ddns.net" target="_blank" rel="noreferrer">Botón</a>
    )
}

const BotonRojo = () => {
    return (
        <a className='btn btn-danger' href="http://miportafolio.ddns.net" target="_blank" rel="noreferrer">Botón</a>
    )
}

const BotonVerde = () => {
    return (
        <a className='btn btn-success' href="http://miportafolio.ddns.net" target="_blank" rel="noreferrer">Botón</a>
    )
}

const botones = {BotonAzul, BotonRojo, BotonVerde}

export default botones