const productos = [
    {id:1,
        nombre: "TV LG",
        precio: 313
    },
    {id:2,
        nombre: "TV Samsung",
        precio: 369
    },
    {id:3,
        nombre: "TV Xiaomi",
        precio: 145
    },
    {id:4,
        nombre: "TV Tesla",
        precio: 299
    },
]

let logo = document.getElementById('logo');

logo.innerHTML = `
                    </div>
        <div class="logo">
            <img src="../assets/img/lamp-charge-logo.svg" alt="logo">
        </div>`

let barra = document.getElementById ('barra');

barra.innerHTML =`
                <div class="barra">
                            <nav>
                                <ul>
                                    <li><a href="">inicio</a></li>
                                    <li><a href="">productos</a></li>
                                    <li><a href="">contactos</a></li>
                                </ul>
                            </nav>
                        </div>`

let titulo = document.getElementById('titulo');

titulo.innerText = "MULTIMAX";

let contenedorCards = document.getElementById("contenedor-cards");

contenedorCards.innerHTML = `
                    <article class="card">
                        <div class="card-img">
                            <img src="../assets/img/tv-samsung.webp" alt="TV Samsung UE65CU7092UXXH 65 LED Crystal UltraHD 4K HDR10+">
                        </div>
                        <div class="card-info">
                            <h3>TV Samsung UE65CU7092UXXH 65" LED Crystal UltraHD 4K HDR10+</h3>
                            <button>comprar</button>
                        </div>
                    </article>
                        `;


const productList = document.getElementById('productList');
const cartItems = document.getElementById('cartItems');

function cargarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.forEach(item => agregarCarritoDOM(item));
}

function agregarCarritoDOM(item) {
    if (cartItems) {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio} x ${item.cantidad}`;
        cartItems.appendChild(li);
    }
}

function agregarAlCarrito(product) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const productoExistente = carrito.find(item => item.nombre === product.nombre);

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        product.cantidad = 1;
        carrito.push(product);
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));

    if (cartItems) {
        cartItems.innerHTML = '';
        carrito.forEach(item => agregarCarritoDOM(item));
    }
}

function mostrarProductos() {
    if (productList) {
        productos.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            const productInfo = document.createElement('span');
            productInfo.textContent = `${product.nombre} - $${product.precio}`;

            const botonAgregar = document.createElement('button');
            botonAgregar.textContent = "Agregar al Carrito";
            botonAgregar.onclick = () => agregarAlCarrito(product);

            productDiv.appendChild(productInfo);
            productDiv.appendChild(botonAgregar);

            productList.appendChild(productDiv);
        });
    }
}

cargarCarrito();
mostrarProductos();


// function agregarAlCarrito(idProducto) {
    
//     const producto = productos.find(p => p.id === idProducto);

//     if (producto) {
//         carrito.push(producto);
//         console.log(`Agregaste al carrito: ${producto.nombre} - Precio: ${producto.precio}`);
//     } else {
//         console.log("Producto no encontrado.");
//     }
    
//     function precioTotal() {
        
//         const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
        
//         console.log(`Precio total del carrito: ${total}`);
//     }

//     precioTotal();
// }


// agregarAlCarrito(1);
// agregarAlCarrito(3); 

// function pagoCuotas(montoProducto, cuotas){
//     let i = 1;
//     while(i <= cuotas){
//         let divisionMontoFinal = montoProducto / cuotas;
//         console.log("el monto a pagar es de " + divisionMontoFinal.toFixed(2) + "$ en " + cuotas + " meses")
//         break;
//     }
// }

// pagoCuotas(parseInt(prompt("ingrese monto del producto")),parseInt(prompt("ingrese en cuantas cuotas desea pagar")));