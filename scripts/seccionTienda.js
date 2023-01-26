const verCarrito = document.getElementById("verCarrito");
const botonVaciar = document.getElementById("vaciarCarrito");
const carritoDeCompras = document.getElementById("carritoDeCompras")
const total = document.getElementById("total");
const botonComprar = document.getElementById("comprar")
const url = "/productos.json"
let productos = [];
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

    let productosCarrito = JSON.parse(localStorage.getItem("carrito", JSON.stringify(carrito)))
   

    function mostrarCarrito(carrito) {
        carrito.forEach((productosCarrito) => {
            const card = document.createElement("div");
            card.innerHTML = `
                    <div class="card unProductoCarrito">
                        <img src="../${productosCarrito.img}" class="card-img-top imgProductos alt="${productosCarrito.nombre}">
                        <div class="card body datosProductoCarrito">
                            <h3 class="card-title">${productosCarrito.nombre}</h3>
                            <p class="card-text">$${productosCarrito.precio}</p>
                            <p class="card-text">${productosCarrito.cantidad}</p>
                            <button class="botonEliminar btn colorBoton" id="${productosCarrito.id}"> Eliminar del Carrito<button>
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
    console.log(mostrarCarrito)
    
    function calcularTotal() {
        let totalCompra = 0;
        carrito.forEach((productosCarrito) => {
            totalCompra += productosCarrito.precio * productosCarrito.cantidad;
        })
        total.innerHTML = `$${totalCompra}`;
        console.log(totalCompra)
    }
    
    
    
    function eliminarDelCarrito(e, carrito) {
        const index = carrito.findIndex(el => el.id === parseInt(e.target.id))
        carrito.splice(index, 1);
        localStorage.seItem("carrito", JSON.stringify(carrito))
        mostrarCarrito();
    }
    
    //otonVaciar.addEventListener("click", eliminarCarrito);
    
    function eliminarCarrito() {
        carrito = [];
        localStorage.clear("carrito", JSON.stringify(carrito))
        mostrarCarrito()
    }
    
    console.log(productosCarrito)