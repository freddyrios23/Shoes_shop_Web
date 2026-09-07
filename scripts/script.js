// Catálogo de productos
const productos = [
    {
        id: 1,
        nombre: "Zapatillas adidas superstar",
        precio: 79000,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6TeoFheP4BGfyLSSe1ZDVhHRqFVjkvhZdLv0Xq0-rEQ&s=10"
    },
    {
        id: 2,
        nombre: "Jordan 4 Retro Black cat",
        precio: 230000,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qgF_HCE-vphyTdD8RVgnm0lkCqIxU1iDC_XKTDoVZQ&s=10"
    },
    {
        id: 3,
        nombre: "Jordan 5 Retro Toro Bravo",
        precio: 180000,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZAxfZF_PNCc8jvrugpJEvzxhrkeiFN0FFrJC0U_IYJg&s=10"
    },
    {
        id: 4,
        nombre: "Jordan 11 Retro",
        precio: 239000,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXsGJ4j1puQWurhFKx_6OvHiSFx-AvgJWUAdd3F8hvyg&s=10"
    },
    {
        id: 5,
        nombre: "Zapatillas Nike air max plus",
        precio: 80000,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUMpQvM-y-Y0QuJ_7c4rkuydoJJskdULLsOb54RppDvQ&s=10"
    },
    {
        id: 6,
        nombre: "Zapatillas reebok classic",
        precio: 50000,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdKGUozDyIZcmJYHySbA__N4PZWRR_s3rG7kLI0AYHw&s=10"
    },
    {
        id: 7,
        nombre: "Botín Hombre Cuero Amarillo Impermeable Timberland",
        precio: 80000,
        imagen: "https://media.falabella.com/falabellaCL/50414937_1/w=1200,h=1200,fit=pad"
    },
    {
        id: 8,
        nombre: "Zapatillas adidas Campus Verdes",
        precio: 69000,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3Qxi2RPhE-hoKLzP1sXZ_wUcZzl0FMxBjwxlc33d8g&s=10"
    }
];

// Lista del carrito
let carrito = [];

// Función para agregar al carrito y guardar en localStorage
function agregarAlCarrito(idProducto) {
    // 1. Buscamos el zapato en el catálogo
    const zapato = productos.find(producto => producto.id === idProducto);
    
    // 2. Lo metemos a la lista del carrito
    carrito.push(zapato);
    
    // 3. Guardamos la lista en el navegador convirtiéndola a texto
    localStorage.setItem("miCarrito", JSON.stringify(carrito));
    
    console.log("¡Zapato agregado!", zapato);
    console.log("Tu carrito completo ahora tiene: ", carrito);
}