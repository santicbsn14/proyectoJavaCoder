
// let datoObtenido= prompt("Cuantas veces quiere que lo felicitemos?")
// for (let i=1; i<=datoObtenido;i++){
//     alert("Te felicitamos " + i + " veces")
// function solicitarDatos(){
//     let nombreIngresado = prompt("Ingresar Nombre")
//     let apellidoIngresado = prompt("Ingresar Apellido")
//     let edadIngresada = prompt("Ingresar edad")
//     alert("Bienvenido a el/la señor/a " + nombreIngresado  + "" +  apellidoIngresado + ".Felicitaciones por sus " + edadIngresada + " años" )
// }
// solicitarDatos()

const cafes = [
   {nombre: "Cafe Virginia molido" , precio: 1000} ,
   {nombre: "Cafe Virginia en granos" , precio: 900} ,
   {nombre: "Cafe Virginia torrado" , precio: 800} ,
   {nombre: "Cafe Bonafide molido" , precio: 2000} ,
   {nombre: "Cafe Bonafide  en granos" , precio: 1900} ,
   {nombre: "Cafe Bonafide torrado" , precio: 1800} ,
] 
const cafeEconomico = cafes.filter ((el) => el.nombre.includes ("Virginia"))
const cafeCalidad = cafes.filter ((el) => el.nombre.includes ("Bonafide") )
console.log(cafeEconomico)
console.log(cafeCalidad)