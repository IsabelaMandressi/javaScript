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


let carrito =[];

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

