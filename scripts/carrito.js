let carrito =JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarCarrito(productos) {
    carrito.forEach(productos => {
        let card = document.createElement("div");
        card.innerHTML = `
            <div class="card unProducto">
                <img src="../${productos.img}" class="card-img-top imgProductos alt="${productos.nombre}">
                <div class="card body datosProducto">
                    <h3 class="card-title">${productos.nombre}</h3>
                    <p class="card-text">$${productos.precio}</p>
                    <p class="card-text">${productos.cantidad}</p>
                    <button class="eliminarDelCarrito btn colorBoton" id="${productos.id}"> Eliminar del Carrito <button>
                </div>
            </div>        
        `
        carritoDeCompras.appendChild(card);
    })
    const botonEliminarDelCarrito = document.querySelectorAll(".eliminarDelCarrito");
    botonEliminarDelCarrito.forEach(btn => {
        btn.addEventListener("click", (e) => eliminarDelCarrito(e, productos))
        
    })

}
mostrarCarrito()
calcularTotal()



function calcularTotal() {
    let totalCompra = 0;
    carrito.forEach((productos) => {
        totalCompra += productos.precio * productos.cantidad;
    })
    const total = document.getElementById("total");
    let factura = document.createElement("div");
    factura.innerHTML = `
    <p>Total $${totalCompra}</p> 
    `
    total.appendChild(factura);
}





function eliminarDelCarrito(e, carrito) {
    const index = carrito.findIndex(el => el.id === parseInt(e.target.id))
    console.log(index)
    carrito.splice(index, 1);
    localStorage.seItem("carrito", JSON.stringify(carrito))
    mostrarCarrito();
}

const botonVaciar = document.getElementById("vaciarCarrito");
botonVaciar.addEventListener("click", vaciarCarrito);


function vaciarCarrito() {
    carrito = [];
    localStorage.clear("carrito", JSON.stringify(carrito))
    mostrarCarrito()
}

