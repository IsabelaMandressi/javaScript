const verCarrito = document.getElementById("verCarrito");

const contenedorProductos = document.getElementById("contenedorProductos");
const botonComprar = document.getElementById("comprar");
const url = "/productos.json"

fetch(url)
    .then(response => response.json())
    .then(data =>
        mostrarProductos(data)
    )


function mostrarProductos(data) {
    data.forEach(prod => {
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
    const botonAgregarAlCarrito = document.querySelectorAll('.agregarAlCarrito');
    botonAgregarAlCarrito.forEach(btn => {
        btn.addEventListener("click", (e) => agregarAlCarrito(e.target.id, data))
        
    })
}
let carrito =JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(id, data) {
    let productoElegido = data.find(el => el.id === parseInt(id));
    let productoEnCarrito = carrito.find(el => el.id === parseInt(id))
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    }else{
        carrito.push(productoElegido);
    }
    localStorage.setItem( "carrito", JSON.stringify(carrito))
    }


