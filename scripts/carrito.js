
const verCarrito = document.getElementById("verCarrito");
const botonVaciar = document.getElementById("vaciarCarrito");
const carritoDeCompras = document.getElementById("carritoDeCompras")
const total = document.getElementById("total");
const botonComprar = document.getElementById("comprar");

let productos = [];
let carrito=[];

function mostrarCarrito(carrito) {
    carrito.forEach((productos) => {
        const card = document.createElement("div");
        card.innerHTML = `
                <div class="card unProductoCarrito">
                    <img src="../${productos.img}" class="card-img-top imgProductos alt="${productos.nombre}">
                    <div class="card body datosProductoCarrito">
                        <h3 class="card-title">${productos.nombre}</h3>
                        <p class="card-text">$${productos.precio}</p>
                        <p class="card-text">${productos.cantidad}</p>
                        <button class="botonEliminar btn colorBoton" id="${productos.id}"> Eliminar del Carrito<button>
                    </div>
                </div>        
            `
        carritoDeCompras.appendChild(card);
    })
    const botonEliminarDelCarrito = document.querySelectorAll(`.botonEliminar`);
    botonEliminarDelCarrito.forEach(btn => {
        btn.addEventListener("click", (e) => eliminarDelCarrito(e, carrito))
    })
    calcularTotal();
}

function calcularTotal() {
    let totalCompra = 0;
    carrito.forEach((productos) => {
        totalCompra += productos.precio * productos.cantidad;
    })
    total.innerHTML = `$${totalCompra}`;
}



function eliminarDelCarrito(e, carrito) {
    const index = carrito.findIndex(el => el.id === parseInt(e.target.id))
    carrito.splice(index, 1);
    localStorage.seItem("carrito", JSON.stringify(carrito))
    mostrarCarrito();
}

botonVaciar.addEventListener("click", eliminarCarrito)

function eliminarCarrito() {
    carrito = [];
    localStorage.clear("carrito", JSON.stringify(carrito))
    mostrarCarrito()
}

