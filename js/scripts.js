// /*!
// * Start Bootstrap - Business Casual v7.0.8 (https://startbootstrap.com/theme/business-casual)
// * Copyright 2013-2022 Start Bootstrap
// * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
// */
// // Highlights current date on contact page
// window.addEventListener('DOMContentLoaded', event => {
//     const listHoursArray = document.body.querySelectorAll('.list-hours li');
//     listHoursArray[new Date().getDay()].classList.add(('today'));
// })
// let datoIngresado= prompt("Por favor ingrese un numero de veces que se repetira un mensaje")
// if(datoIngresado <=10){
//     for(let i=1;i <=datoIngresado;I++){
//         alert("Este es el mensaje"+ i)
//     }
// }
// else{
//     alert("solo se contar hasta 10:(")
// }
let datoObtenido= prompt("Por favor ingrese la edad que tiene")
if(datoObtenido>17){
    prompt("Ingrese la edad nuevamente para verificar")
    for(let i=17;i>datoObtenido;i++){
        alert("Bienvenido a nuestra cafeteria")
    }
}

else{
    alert("Se tendra que retirar de la web")
}