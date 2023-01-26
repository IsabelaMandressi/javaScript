const verCarrito = document.getElementById("verCarrito");
const botonVaciar = document.getElementById("vaciarCarrito");
const carritoDeCompras = document.getElementById("carritoDeCompras");
const total = document.getElementById("total");
const botonComprar = document.getElementById("comprar");
const url = "/productos.json"

fetch(url)
    .then(response => response.json())
    .then(data =>
        mostrarProductos(data)
    )

const contenedorProductos = document.getElementById("contenedorProductos");
function mostrarProductos(productos) {
    productos.forEach(prod => {
        let card = document.createElement("div");
        card.innerHTML = `
            <div class="card unProducto">
                <img src="../${prod.img}" class="card-img-top imgProductos alt="${prod.nombre}">
                <div class="card body datosProducto">
                    <h3 class="card-title">${prod.nombre}</h3>
                    <p class="card-text">$${prod.precio}</p>
                    <p class="card-text">${prod.cantidad}</p>
                    <button class="agregarAlCarrito btn colorBoton" id="${prod.id}"> Agregar al carrito<button>
                </div>
            </div>        
        `
        contenedorProductos.appendChild(card);
    })
    const botonAgregarAlCarrito = document.querySelectorAll(".agregarAlCarrito");
    botonAgregarAlCarrito.forEach(btn => {
        btn.addEventListener("click", (e) => agregarAlCarrito(e, productos))
        
    })

}


let carrito = [];

function agregarAlCarrito(e, prods) {
    const productoElegido = prods.find(el => el.id === parseInt(e.target.id));
    console.log(productoElegido)
    if(productoElegido){
        productoElegido.cantidad++
        carrito.push(productoElegido)
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }
    else{
        carrito.push(productoElegido);
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }
    }

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
        let factura = document.createElement("div");
        factura.innerHTML = `
        <p>Total $${totalCompra}</p>`
    }
    
    
    
    function eliminarDelCarrito(e, carrito) {
        const index = carrito.findIndex(el => el.id === parseInt(e.target.id))
        console.log(index)
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
    
