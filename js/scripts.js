// let edad= prompt("Que edad tiene?")
// if(edad>=18){
//     alert("Bienvenido a nuestra cafeteria")
// }
// else{
//     alert("Usted es menor de edad, no deberia estar aqui")
// }
let queCafeBusca= prompt("Que clase de cafe busca? Economico, o de calidad?")
if(queCafeBusca="Economico"){
    alert("Muchas gracias por la respuesta, nos estaremos encargando de sus necesidades.")
}
else{
    alert("Muchas gracias por la respuesta, nos estaremos encargando de sus necesidades.")
}
const productos=[
    {id: 1, name:"Cafe Premium" , price :1200}
]
const carrito=[]
function agregarAlCarrito(producto){
    carrito.push(producto);
}
agregarAlCarrito({id: 1, name:"Cafe Premium", price: 1200})