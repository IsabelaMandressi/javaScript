const precioPolera = 1690;
const precioPanuelo = 990;
const precioTote = 690;
//Definicion de producto
class Producto {
    constructor(id, categoria, nombre, precio, img) {
        this.id = id;
        this.categoria = categoria
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}
let categoria = ["polera", "toteBag", "panuelo"];
const toteBagOne = new Producto(1, categoria[1], "Tote Bag - Inca Cola - Serie Lejos de casa", precioTote, "img/toteOne.jpg");
const toteBagTwo = new Producto(2, categoria[1], "Tote Bag - Ceviche al paso - Serie Lejos de casa", precioTote, "img/toteTwo.jpg");
const toteBagThree = new Producto(3, categoria[1], "Tote Bag - Cumbia - Serie Menesteres", precioTote, "img/toteThree.jpg");
const toteBagFour = new Producto(4, categoria[1], "Tote Bag - Amigas - Serie Menesteres", precioTote, "img/toteFour.jpg");
const toteBagFive = new Producto(5, categoria[1], "Tote Bag - Coco - Serie Lejos de casa", precioTote, "img/toteFive.jpg");
const toteBagSix = new Producto(6, categoria[1], "Tote Bag - Garopaba - Serie Lejos de casa", precioTote, "img/toteSix.jpg");
const toteBagSeven = new Producto(7, categoria[1], "Tote Bag - Santiago - Serie Lejos de casa", precioTote, "img/toteSeven.jpg");
const toteBagEight = new Producto(8, categoria[1], "Tote Bag - Plena - Serie Menesteres", precioTote, "img/toteEight.jpg");
const toteBagNine = new Producto(9, categoria[1], "Tote Bag - Cuzco - Serie Lejos de casa", precioTote, "img/toteNine.jpg");
const toteBagTen = new Producto(10, categoria[1], "Tote Bag - Cafecito - Serie Lejos de casa", precioTote, "img/toteTen.jpg");
const toteBagEleven = new Producto(11, categoria[1], "Tote Bag - Desayuno - Serie Menesteres", precioTote, "img/toteEleven.jpg");
const toteBagTwelve = new Producto(12, categoria[1], "Tote Bag - Tabaquito- Serie Menesteres", precioTote, "img/toteTwelve.jpg");
const toteBagThirteen = new Producto(13, categoria[1], "Tote Bag - Domingo - Serie Menesteres", precioTote, "img/toteThirteen.jpg");
const toteBagFourteen = new Producto(14, categoria[1], "Tote Bag - Torta Fritas - Serie Lejos de casa", precioTote, "img/toteFourteen.jpg");
const toteBagFifteen = new Producto(15, categoria[1], "Tote Bag - Noche - Serie Menesteres", precioTote, "img/toteFifteen.jpg");
const toteBagSixteen = new Producto(16, categoria[1], "Tote Bag - Confites - Serie Lejos de casa", precioTote, "img/toteSixteen.jpg");
const toteBagSeventeen = new Producto(17, categoria[1], "Tote Bag - Aire de mar - Serie Salitre", precioTote, "img/toteSeventeen.jpg");
const toteBagEighteen = new Producto(18, categoria[1], "Tote Bag - Olvido - Serie Salitre", precioTote, "img/toteEighteen.jpg");
const toteBagNineteen = new Producto(19, categoria[1], "Tote Bag - Atardecer - Serie Salitre", precioTote, "img/toteNineteen.jpg");
const toteBagTwenty = new Producto(20, categoria[1], "Tote Bag - Paraíso - Serie Salitre", precioTote, "img/toteTwentyOne.jpg");
const toteBagTwentyOne = new Producto(21, categoria[1], "Tote Bag - Bela Infancia - Serie Salitre", precioTote, "img/toteTwentyOne.jpg");
const toteBagTwentyTwo = new Producto(22, categoria[1], "Tote Bag - Otoño - Serie Salitre", precioTote, "img/toteTwentyTwo.jpg");
const toteBagTwentyThree = new Producto(23, categoria[1], "Tote Bag - Salitre - Serie Salitre", precioTote, "img/toteTwentyThree.jpg");
const toteBagTwentyFour = new Producto(24, categoria[1], "Tote Bag - Lejano - Serie Salitre", precioTote, "img/toteTwentyFour.jpg");
const panueloOne = new Producto(25, categoria[2], "Pañuelo - Caracoles- Serie Salitre", precioPanuelo, "img/panueloOne.jpg");
const panueloTwo = new Producto(26, categoria[2], "Pañuelo - Salitre- Serie Salitre", precioPanuelo, "img/panueloTwo.jpg");
const panueloThree = new Producto(27, categoria[2], "Pañuelo - Flor- Serie Brote", precioPanuelo, "img/panueloThree.jpg");
const panueloFour = new Producto(28, categoria[2], "Pañuelo - Hortensias- Serie Salitre", precioPanuelo, "img/panueloFour.jpg");
const panueloFive = new Producto(29, categoria[2], "Pañuelo - Bokita- Serie Lejos de casa", precioPanuelo, "img/panueloFive.jpg");
const panueloSix = new Producto(30, categoria[2], "Pañuelo - Cardos- Serie Brote", precioPanuelo, "img/panueloSix.jpg");
const panueloSeven = new Producto(31, categoria[2], "Pañuelo - Otoño- Serie Brote", precioPanuelo, "img/panueloSeven.jpg");
const panueloEight = new Producto(32, categoria[2], "Pañuelo - Polen- Serie Brote", precioPanuelo, "img/panueloEight.jpg");
const poleraOne = new Producto(33, categoria[0], "Polera - Florista- Serie Lejos de casa", precioPolera, "img/poleraUnoUno.jpg");
const poleraTwo = new Producto(34, categoria[0], "Polera - Cardos- Serie Brote", precioPolera, "img/poleraDosUno.jpg");
const poleraThree = new Producto(35, categoria[0], "Polera - Paraíso- Serie Salitre", precioPolera, "img/poleraTresUno.jpg");
const poleraFour = new Producto(36, categoria[0], "Polera - Caracoles- Serie Salitre", precioPolera, "img/poleraCuatroUno.jpg");
const poleraFive = new Producto(37, categoria[0], "Polera - Polen- Serie Brote", precioPolera, "img/poleraCincoUno.jpg");
const poleraSix = new Producto(38, categoria[0], "Polera - Cerezos- Serie Brote", precioPolera, "img/poleraSeisUno.jpg");

let productos = [toteBagOne, toteBagTwo, toteBagThree, toteBagFour, toteBagFive, toteBagSix, toteBagSeven, toteBagEight, toteBagNine, toteBagTen, toteBagEleven, toteBagTwelve, toteBagThirteen, toteBagFourteen, toteBagFifteen, toteBagSixteen, toteBagSeventeen, toteBagEighteen, toteBagNineteen, toteBagTwenty, toteBagTwentyOne, toteBagTwentyTwo, toteBagTwentyThree, toteBagTwentyThree, toteBagTwentyFour, panueloOne, panueloTwo, panueloThree, panueloFour, panueloFive, panueloSix, panueloSeven, panueloEight, poleraOne, poleraTwo, poleraThree, poleraFour, poleraFive, poleraSix];

let carrito = [];

if(localStorage.getItem("carrito")){
    carrito=JSON.parse(localStorage.getItem("carrito")); 
}

console.log(productos)

//Mostrar productos

const contenedorProductos = document.getElementById("contenedorProductos");
const mostrarProductos = () => {
    productos.forEach((producto) => {
        const card = document.createElement("div");
        card.innerHTML = `
            <div class="card unProducto">
                <img src="../${producto.img}" class="card-img-top imgProductos alt="${producto.nombre}">
                <div class="card body datosProducto">
                    <h3 class="card-title">${producto.nombre}</h3>
                    <p class="card-text">$${producto.precio}</p>
                    <p class="card-text">${producto.cantidad}</p>
                    <button class="botonComprar btn colorBoton" id="boton${producto.id}"> Agregar al carrito<button>
                </div>
            </div>        
        `
        contenedorProductos.appendChild(card);
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click",() =>{
            agregarAlCarrito(producto.id)
        })
    })
}
mostrarProductos();

//Construccion del carrito 

const agregarAlCarrito = (id) => {
    const producto = productos.find((producto) => producto.id === id);
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++
    }
    else{
        carrito.push(producto);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
    mostrarCarrito();
    calcularTotal();
    }


const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () =>{
    mostrarCarrito()
});

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML="";
    carrito.forEach((producto)=> {
        const card = document.createElement("div");
        card.innerHTML = `
            <div class="card unProductoCarrito">
                <img src="../${producto.img}" class="card-img-top imgProductos alt="${producto.nombre}">
                <div class="card body datosProductoCarrito">
                    <h3 class="card-title">${producto.nombre}</h3>
                    <p class="card-text">$${producto.precio}</p>
                    <p class="card-text">${producto.cantidad}</p>
                    <button class="botonComprar btn colorBoton" id="eliminar${producto.id}"> Eliminar del Carrito<button>
                </div>
            </div>        
        `
        contenedorCarrito.appendChild(card);
        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click",() =>{
            eliminarDelCarrito(producto.id)
        })
    })
    calcularTotal();
}

const eliminarDelCarrito = (id) => {
    const producto = carrito.find((producto)=> producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();
    localStorage.setItem("carrito", JSON.stringify(carrito))
}
const vaciarCarrito = document.getElementById("vaciarCarrito");
vaciarCarrito.addEventListener("click", () => {
    eliminarDelCarrito();
})
const eliminarCarrito = () => {
    carrito=[]
    mostrarCarrito();
    localStorage.clear();
}

//Calculo del total

const total = document.getElementById("total");
const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach((producto) => {
        totalCompra += producto.precio * producto.cantidad;
    })
    total.innerHTML= `$${totalCompra}`;
}