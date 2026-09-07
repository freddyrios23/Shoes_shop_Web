// Catálogo de productos para usar más adelante
const productos = [ 
    {
        id: 1,
        nombre: "Zapatillas adidas superstar",
        precio: 79000,
        imagen: "../imagenes/Adidas.jpg" // Usa el nombre exacto de tu archivo
    },
    {
        id: 2,
        nombre: "Zapatillas Nike air max plus",
        precio: 80000,
        imagen: "../imagenes/nike-air-max-plus.jpg"
    },
    {
        id: 3,
        nombre: "Zapatillas reebok classic",
        precio: 50000,
        imagen: "../imagenes/reebok-clasic.jpg"
    }
];

let carrito = [];

function agregarAlCarrito(idProducto){

    const zapato = productos.find(producto => producto.id === idProducto);

    carrito.push(zapato);

    
}