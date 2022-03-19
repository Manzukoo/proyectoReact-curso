import React from 'react'

const dameHora = () => {

    const date = new Date()
    let dia = date.getDate()
    let mes = date.getMonth()+1
    let hora = date.getHours()
    let minutos = date.getMinutes()
    let segundos = date.getSeconds()

    if(segundos <= 9) segundos = `0${segundos}`
    if(hora <= 9) hora = `0${hora}`
    if(minutos <= 9) minutos = `0${minutos}`
    if(dia <= 9) dia = `0${dia}`
    if(mes <= 9) mes = `0${mes}`

    return `Hoy es ${dia}/${mes} y son las ${hora}:${minutos}:${segundos}`
}


const Reloj = () => {
    return (
        <div>
            <h1>{dameHora()}</h1>
        </div>
    );
}

export default Reloj;