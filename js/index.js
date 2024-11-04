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

let carrito = [];

function agregarAlCarrito(idProducto) {
    
    const producto = productos.find(p => p.id === idProducto);

    if (producto) {
        carrito.push(producto);
        console.log(`Agregaste al carrito: ${producto.nombre} - Precio: ${producto.precio}`);
    } else {
        console.log("Producto no encontrado.");
    }
    
    function precioTotal() {
        
        const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
        
        console.log(`Precio total del carrito: ${total}`);
    }

    precioTotal();
}


agregarAlCarrito(1);
agregarAlCarrito(3); 

function pagoCuotas(montoProducto, cuotas){
    let i = 1;
    while(i <= cuotas){
        let divisionMontoFinal = montoProducto / cuotas;
        console.log("el monto a pagar es de " + divisionMontoFinal.toFixed(2) + "$ en " + cuotas + " meses")
        break;
    }
}

pagoCuotas(parseInt(prompt("ingrese monto del producto")),parseInt(prompt("ingrese en cuantas cuotas desea pagar")));