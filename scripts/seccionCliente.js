class Cliente {
    constructor(nombre, apellido, ci, celular, email, domicilio){
        this.nombre = nombre;
        this.apellido = apellido;
        this.ci = ci;
        this.celular = celular;
        this.email = email;
        this.domicilio = domicilio;
    }
}

const clientes = [];

function altaCliente(){
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const ci = document.getElementById("cedula");
    const celular = document.getElementById("celular");
    const email = document.getElementById("correo");
    const domicilio = document.getElementById("domicilio");
    let cliente = new Cliente(nombre, apellido, ci, celular, email, domicilio);
    clientes.push(cliente);
}

const ciNumero = document.getElementById("cedula");
ciNumero.classList.add("validate-integer");

const celNumero = document.getElementById("celular");
celNumero.classList.add("validate-integer");
const correoElectronico = document.getElementById("email");
correoElectronico.classList.add("validate-email")

localStorage.setItem("formRegistro", JSON.stringify(clientes))

const finalizarCompra = document.getElementById("finalizarCompra");
finalizarCompra.addEventListener ("click", () =>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Su compra ha sido realizada con éxito',
        showConfirmButton: false,
        timer: 1500
    })
    })

console.log(localStorage.getItem("formRegistro"))