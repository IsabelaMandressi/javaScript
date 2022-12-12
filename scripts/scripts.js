const precioPolera = 1690;
const precioPanuelo = 990;
const precioTote = 690;
const factorIva = 1.22
const precioEnvio = 150;

class cliente {
    constructor(nombreyapellido, numeroCelular, direccion, correoElectronico) {
        this.nombreyapellido = nombreyapellido.toUpperCase();
        this.numeroCelular = numeroCelular.toString();
        this.direccion = direccion.toUpperCase();
        this.correoElectronico = correoElectronico;
    }
    toString() {
        return this.nombreyapellido
    }
}
let clienteNuevo = new cliente(prompt("Nombre y apellido").toLocaleUpperCase(), prompt("Número de celular"), prompt("Dirección").toLocaleUpperCase(), prompt("Correo electrónico").toLocaleUpperCase())
console.log(clienteNuevo)

class stock {
    constructor(producto, cantidad, vendido) {
        this.producto = producto;
        this.cantidad = cantidad;
        this.vendido = vendido;
    }
    toString() {
        return this.cantidad
    }
}

let numeroPoleras = prompt("Indique cuantas poleras que desea comprar");

let polerasStock = new stock("Poleras", 10, numeroPoleras)
console.log(polerasStock);

if (numeroPoleras <= polerasStock.cantidad) {
    console.log(numeroPoleras.toString() + " poleras")
    console.log("Quedan " + (parseInt(polerasStock.cantidad) - parseInt(numeroPoleras)).toString() + " poleras en stock")
} else {
    console.log("Lo sentimos. No hay stock suficiente.")
}

let numeroPanuelos = prompt("Indique cuantos pañuelos desea comprar");
let panuelosStock = new stock("Pañuelos", 5, numeroPanuelos)
console.log(panuelosStock);

if (numeroPanuelos <= panuelosStock.cantidad) {
    console.log(numeroPanuelos.toString() + " pañuelos")
    console.log("Quedan " + (parseInt(panuelosStock.cantidad) - parseInt(numeroPanuelos)).toString() + " pañuelos en stock")
} else {
    console.log("Lo sentimos. No hay stock suficiente.")
}
let numeroToteBags = prompt("Indique cuantas Tote Bags desea comprar");
let toteBagsStock = new stock("Tote bags", 15, numeroToteBags)
console.log(toteBagsStock);

if (numeroToteBags <= toteBagsStock.cantidad) {
    console.log(numeroToteBags.toString() + " tote bags")
    console.log("Quedan " + (parseInt(panuelosStock.cantidad) - parseInt(numeroPanuelos)).toString() + " tote bags en stock")
} else {
    console.log("Lo sentimos. No hay stock suficiente.")
}

let poleras = parseFloat(numeroPoleras) * parseFloat(precioPolera) * parseFloat(factorIva);
let panuelos = parseFloat(numeroPanuelos) * parseFloat(precioPanuelo) * parseFloat(factorIva);
let toteBags = parseFloat(numeroToteBags) * parseFloat(precioTote) * parseFloat(factorIva);

let direccion = prompt("Indique dirección de envío");
console.log("Dirección de envío " + direccion);

let totalArticulos = (parseInt(numeroPoleras) + parseInt(numeroPanuelos) + parseInt(numeroToteBags));
console.log("El total de artículos es " + totalArticulos);
let total = parseInt(parseFloat(poleras) + parseFloat(panuelos) + parseFloat(toteBags) + parseFloat(precioEnvio));
console.log("El total es $" + total);
let totalconDescuento = parseInt(total - (total * (0.10)));

if (totalArticulos >= 2) {
    console.log("El total de artículos es mayor a 2")
    alert("ATENCIÓN ¡Con la compra de 2 o más artículos obtenes un 10% de descuento!")
    console.log("El total con 10% OFF es $" + parseInt(totalconDescuento));
    final = confirm("Usted está comprando " + numeroPoleras.toString() + " poleras, " + numeroPanuelos.toString() + " panuelos y " + numeroToteBags.toString() + " tote bags. El monto a pagar es $" + totalconDescuento.toString() + ". Confirme si desea seguir con la compra.");
}
else {
    console.log("El total a pagar es $" + parseInt(total));
    final = confirm("Usted está comprando " + numeroPoleras.toString() + " poleras, " + numeroPanuelos.toString() + " panuelos y " + numeroToteBags.toString() + " tote bags. El monto a pagar es $" + total.toString() + ". Confirme si desea seguir con la compra.");
}


console.log("La compra fue realizada por " + clienteNuevo.nombreyapellido + " Número de contacto " + clienteNuevo.numeroCelular + " Domicilio " + clienteNuevo.direccion)


