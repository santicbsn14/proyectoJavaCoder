
// let datoObtenido= prompt("Cuantas veces quiere que lo felicitemos?")
// for (let i=1; i<=datoObtenido;i++){
//     alert("Te felicitamos " + i + " veces")
// }
function solicitarDatos(){
    let nombreIngresado = prompt("Ingresar Nombre")
    let apellidoIngresado = prompt("Ingresar Apellido")
    let edadIngresada = prompt("Ingresar edad")
    alert("Bienvenido a el/la señor/a " + nombreIngresado  + "" +  apellidoIngresado + ".Felicitaciones por sus " + edadIngresada + " años" )
}
solicitarDatos()