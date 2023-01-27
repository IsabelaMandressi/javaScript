const botonVaciar = document.getElementById("vaciarCarrito");
const carritoDeCompras = document.getElementById("carritoDeCompras");
const total = document.getElementById("total");
let carrito =JSON.parse(localStorage.getItem('carrito')) || [];

function mostrarCarrito(carrito) {
    carrito.forEach(producto => {
        let card = document.createElement("div");
        card.innerHTML = `
            <div class="card unProducto">
                <img src="../${producto.img}" class="card-img-top imgProductos alt="${producto.nombre}">
                <div class="card body datosProducto">
                    <h3 class="card-title">${producto.nombre}</h3>
                    <p class="card-text">$${productoE.precio}</p>
                    <p class="card-text">${producto.cantidad}</p>
                    <button class="eliminarDelCarrito btn colorBoton" id="${producto.id}"> Eliminar del Carrito <button>
                </div>
            </div>        
        `
        carritoDeCompras.appendChild(card);
    })
    const botonEliminarDelCarrito = document.querySelectorAll(".eliminarDelCarrito");
    botonEliminarDelCarrito.forEach(btn => {
        btn.addEventListener("click", (e) => eliminarDelCarrito(e, producto))
        
    })

}
mostrarCarrito()
calcularTotal()


function calcularTotal() {
    let totalCompra = 0;
    carrito.forEach((producto) => {
        totalCompra += producto.precio * producto.cantidad;
    })
    let factura = document.createElement("div");
    factura.innerHTML = `
    <p>Total $${totalCompra}</p>`
    total.appendChild(factura);
}

function eliminarDelCarrito(e, carrito) {
    const index = carrito.findIndex(el => el.id === parseInt(e.target.id))
    carrito.splice(index, 1);
    localStorage.seItem("carrito", JSON.stringify(carrito))
    mostrarCarrito();
}

botonVaciar.addEventListener("click", vaciarCarrito);


function vaciarCarrito() {
    carrito = [];
    localStorage.clear("carrito", JSON.stringify(carrito))
    mostrarCarrito()
}

