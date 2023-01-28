const botonVaciar = document.getElementById("vaciarCarrito");
const carritoDeCompras = document.getElementById("carritoDeCompras");
const total = document.getElementById("total");

let carrito =JSON.parse(localStorage.getItem('carrito')) || [];

function mostrarCarrito() {
    carrito.forEach(producto => {
        let card = document.createElement("div");
        card.innerHTML = `
            <div class="card unProducto">
                <img src="../${producto.img}" class="card-img-top imgProductos alt="${producto.nombre}">
                <div class="card body datosProducto">
                    <h3 class="card-title">${producto.nombre}</h3>
                    <p class="card-text">$${producto.precio}</p>
                    <p class="card-text">${producto.cantidad}</p>
                    <button class="eliminarDelCarrito btn colorBoton" id="${producto.id}"> Eliminar del Carrito <button>
                </div>
            </div>        
        `
        carritoDeCompras.appendChild(card);
    })
    const botonEliminarDelCarrito = document.querySelectorAll('.eliminarDelCarrito');
    botonEliminarDelCarrito.forEach(btn => {
        btn.addEventListener("click", (e) => eliminarDelCarrito(parseInt(e.target.id)))
        
    })

}
mostrarCarrito();
calcularTotal();


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

function eliminarDelCarrito(id) {
    const productoEliminado = carrito.find(el=> el.id === parseInt(id))
    const indice = carrito.indexOf(productoEliminado)
    carrito.splice(indice, 1);
    mostrarCarrito();
}

botonVaciar.addEventListener("click", vaciarCarrito);


function vaciarCarrito() {
    carrito.length = 0;
    localStorage.clear("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

