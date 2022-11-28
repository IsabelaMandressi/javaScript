const precioPolera = 1690;
const precioPanuelo = 990;
const precioTote = 690;
const factorIva =1.22
const precioEnvio= 150;

function solicitarNombre (){
    let nombreyapellido = prompt ("Nombre y apellido");
    console.log(nombreyapellido);
}
solicitarNombre();

function solicitarCorreo (){
    let correoElectronico = prompt ("Correo electrónico");
    console.log(correoElectronico);
}
solicitarCorreo();


function solicitarContacto (){
    let numeroCelular = prompt ("Número de celular");
    console.log(numeroCelular);
}
solicitarContacto();


let numeroPoleras = prompt ("Indique cuantas poleras desea comprar");
console.log(numeroPoleras + " poleras");
let numeroPanuelos = prompt ("Indique cuantos pañuelos desea comprar");
console.log(numeroPanuelos + " pañuelos");
let numeroToteBags = prompt ("Indique cuantas tote bags desea comprar");
console.log(numeroToteBags + " tote bags");

let poleras = parseFloat(numeroPoleras)*parseFloat(precioPolera)*parseFloat(factorIva);
let panuelos = parseFloat(numeroPanuelos)*parseFloat(precioPanuelo)*parseFloat(factorIva);
let toteBags = parseFloat(numeroToteBags)*parseFloat(precioTote)*parseFloat(factorIva);

let envio = prompt("Indique dirección de envío");
console.log("Dirección de envío "+ envio);

let totalArticulos = (parseInt(numeroPoleras)+parseInt(numeroPanuelos)+parseInt(numeroToteBags));
console.log("El total de artículos es " + totalArticulos);
let total=parseInt(parseFloat(poleras)+parseFloat(panuelos)+parseFloat(toteBags)+ parseFloat(precioEnvio));
console.log("El total es " + total)
let totalconDescuento= parseInt(total- (total* (0.10)));
let final

if (totalArticulos >= 2){
    console.log("El total de artículos es mayor a 2")
    alert("ATENCIÓN ¡Con la compra de 2 o más artículos obtenes un 10% de descuento!")
    console.log("El total con 10%OFF es $"+ parseInt(totalconDescuento));
    final = confirm("Usted está comprando "+ numeroPoleras.toString()+ " poleras, " + numeroPanuelos.toString() + " panuelos y " + numeroToteBags.toString() + " tote bags. El monto a pagar es $" +totalconDescuento.toString() + ". Confirme si desea seguir con la compra.");
    
}
else{
        console.log("El total a pagar es $"+ parseInt(total));
        final = confirm("Usted está comprando "+ numeroPoleras.toString()+ " poleras, " + numeroPanuelos.toString() + " panuelos y " + numeroToteBags.toString() + " tote bags. El monto a pagar es $" +total.toString() + ". Confirme si desea seguir con la compra.");
    }





