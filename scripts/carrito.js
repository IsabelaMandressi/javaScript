
const verCarrito = document.getElementById("verCarrito");
const botonVaciar = document.getElementById("vaciarCarrito");
const carritoDeCompras = document.getElementById("carritoDeCompras")
const total = document.getElementById("total");
const botonComprar = document.getElementById("comprar")
let productos = [];
let productosEnCarritoLS = localStorage.getItem("carrito");
let productosEnCarrito= JSON.parse(productosEnCarritoLS);
const url = "/productos.json"
fetch(url)
    .then(response => response.json())
    .then(data =>
        mostrarCarrito(data)
    )

function mostrarCarrito(productos) {
        productosEnCarrito.forEach((productos) => {
            const card = document.createElement("div");
            card.innerHTML = `
                <div class="card unProductoCarrito">
                    <img src="../${productos.img}" class="card-img-top imgProductos alt="${productos.nombre}">
                    <div class="card body datosProductoCarrito">
                        <h3 class="card-title">${productos.nombre}</h3>
                        <p class="card-text">$${productos.precio}</p>
                        <p class="card-text">${productos.cantidad}</p>
                        <button class="botonEliminar btn colorBoton" id="eliminar${productos.id}"> Eliminar del Carrito<button>
                    </div>
                </div>        
            `
            carritoDeCompras.appendChild(card);
            })
            const botonEliminarDelCarrito = document.querySelectorAll(`.botonEliminar`);
            botonEliminarDelCarrito.forEach(btn =>{btn.addEventListener("click", (e) => {eliminarDelCarrito(e, productos)})
            })
        calcularTotal();
    } 

function calcularTotal () {
    let totalCompra = 0;
    productosEnCarrito.forEach((productos) => {
        totalCompra += productos.precio * productos.cantidad;
    })
    total.innerHTML = `$${totalCompra}`;
    }


/* Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "#DAF7A6",
            borderRadius: "2rem",
            textTransform: "uppercase",
            fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        onClick: function () { } // Callback after click
    }).showToast();*/
/*const productoAgregado = productos.find((productos) => productos.id === id);
if (productosEnCarrito.some(productos => productos.id === id)) {
    const agregar = productosEnCarrito.findIndex(productos => productos.id === id)
    productosEnCarrito[agregar].cantidad++;
    console.log(productosEnCarrito)
}
else {
    productosEnCarrito.push(productoAgregado);
}
localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
mostrarCarrito();
calcularTotal();
}



carritoProductos.innerHTML = "";


function eliminarDelCarrito(productosEnCarrito) {
Toastify({
    text: "Producto eliminado",
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
        background: "linear-gradient(to right, #4b33a8, #785ce9)",
        borderRadius: "2rem",
        textTransform: "uppercase",
        fontSize: ".75rem"
    },
    offset: {
        x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
        y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
    onClick: function () { } // Callback after click
}).showToast();
productosEnCarrito.splice(index, 1);
mostrarCarrito();
localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
}

const idBoton = e.currentTarget.id;
const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);






botonVaciar.addEventListener("click", vaciarCarrito)

function vaciarCarrito() {
productosEnCarrito.length = 0;
localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
mostrarCarrito()

}*/
