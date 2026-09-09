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
    //Buscamos el zapato en el catálogo
    const zapato = productos.find(producto => producto.id === idProducto);

    //Lo metemos a la lista del carrito
    carrito.push(zapato);

    // Guardamos la lista en el navegador convirtiéndola a texto
    localStorage.setItem("miCarrito", JSON.stringify(carrito));

    console.log("¡Zapato agregado!", zapato);
    console.log("Tu carrito completo ahora tiene: ", carrito);
}

function mostrarCarrito(){
    // nos aseguruamos de que el carrito guardadoo siempre sea una lsita
    let carritoGuardado = JSON.parse( localStorage.getItem("miCarrito") ) || [];
    console.log("carrito: ", carritoGuardado);

    let contenedor = document.getElementById("contenedor-carrito");

        // --- EL ESCUDO ---
        if (!contenedor) {
            return; // Esto detiene la función inmediatamente si no hay contenedor
        }
        // -----------------

        // Limpiamos la pantalla para no duplicar elementos
        contenedor.innerHTML = "";

    // Si el carrito está vacío mostramos el total en 0 y un mensaje opcional
    if (carritoGuardado.length === 0) {
        contenedor.innerHTML = "<p>El carrito está vacío.</p>";
        document.getElementById("total-precio").innerText = "Total: $0";
        return; // Detenemos la función aquí
    }

    // Variable para ir acumulando la suma
    let total = 0;

    carritoGuardado.forEach(zapato => {
        // Le sumamos el precio de cada zapato al total
        total += zapato.precio;

        contenedor.innerHTML += `
            <div class="item-carrito">
                <h3>${zapato.nombre}</h3>
                <p>$${zapato.precio}</p>
                <img src="${zapato.imagen}" width="100">
                <button class="button is-danger" onclick="eliminarDelCarrito(${zapato.id})">Eliminar</button>
            </div>
        `;
    });

    // Al terminar el bucle inyectamos la suma final en el HTML
    document.getElementById("total-precio").innerText = `Total: $${total}`;
}

mostrarCarrito();


function eliminarDelCarrito(idProducto) {
    // Recuperamos el carrito actual
    let carritoGuardado = JSON.parse(localStorage.getItem("miCarrito"));

    //  Filtramos la lista: dejamos todos los zapatos menps el que tiene este id
    let carritoNuevo = carritoGuardado.filter(zapato => zapato.id !== idProducto);

    //  Guardamos la nueva lista en localStorage
    localStorage.setItem("miCarrito", JSON.stringify(carritoNuevo));

    // Volvemos a mostrar el carrito para que se actualice la pantalla y el total
    mostrarCarrito();
}

function vaciarCarrito() {
    // Eliminamos los datos guardados en el navegador
    localStorage.removeItem("miCarrito");

    // Volvemos a ejecutar la función para limpiar la pantalla y reiniciar el total
    mostrarCarrito();
}


// Validacion Registro
function validacionesRegistro() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let fechaNacimiento = document.getElementById("date").value; // Nombre corregido

    //  Validar campos vacíos
    if (nombre === "" || email === "" || password === "" || fechaNacimiento === "") {
        alert("Por favor, complete todos los campos.");
      return false;

    }

    //  Validacion nombre
    if (nombre.trim().length < 2 || nombre.trim().length > 20) {
        alert("El nombre debe tener entre 2 y 20 letras");
        return false;
    }

    //  Validacion años (usando .substring)
    let anioNacimiento = parseInt(fechaNacimiento.substring(0, 4));
    let edad = 2026 - anioNacimiento;

    if (edad < 18) {
        alert("Debes ser mayor de 18 años para registrarte");
        return false;
    }

    //  Validacion correo
  let correoValido = email.endsWith("@duoc.cl") ||
                     email.endsWith("@duocuc.cl") ||
                     email.endsWith("@profesor.duoc.cl") ||
                     email.endsWith("@gmail.com") ||
                     email.endsWith("@hotmail.com");

    if (!correoValido) {
        alert("Ingresa un correo válido (@duoc.cl, @duocuc.cl, @profesor.duoc.cl, @gmail.com o @hotmail.com)");
        return false;
    }

    //  Validacion Contraseña (¡Tu nuevo código!)
    if (password.length < 4 || password.length > 10) {
        alert("La contraseña debe tener entre 4 y 10 caracteres");
        return false;
    }

    // Si pasa todos los filtros, llega aquí:
    localStorage.setItem("usuarioGuardado", email);
    localStorage.setItem("claveGuardada", password);
    alert("¡Registro exitoso!");
    return true;
}

//  Atrapamos el formulario de registro (revisa que tu HTML tenga id="registro")
const formularioRegistro = document.getElementById("registro");

//  Nuestro escudo: solo funciona si estamos en la página de registro
if (formularioRegistro) {
    formularioRegistro.addEventListener("submit", function(event) {

        //  Frenamos la página para que no se recargue sola
        event.preventDefault();

        //  Ejecutamos tu función de validaciones
        let todoCorrecto = validacionesRegistro();

        // Si todo salió perfecto, lo mandamos a iniciar sesión
        if (todoCorrecto === true) {
            window.location.href = "login.html";
        }
    });
}



const logo = document.getElementById("logo");

if (logo) {
    logo.addEventListener("click", function() {
        let claveAdmin = prompt("Ingrese la clave secreta de Administrador:");

        if (claveAdmin === "1234") {
            // Guardamos que el usuario es admin en localStorage
            localStorage.setItem("esAdmin", "true");
            alert("¡Modo Administrador Activado!");
            window.location.href = "/OtrasPag/ModoAdmin.html"; // Redirige a la vista admin
        } else if (claveAdmin !== null) {
            alert("Clave incorrecta. Acceso denegado.");
        }
    });
}

// Validación de login
const formularioLogin = document.getElementById("login");

if (formularioLogin) {
  formularioLogin.addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("correo").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Buscamos los datos guardados al registrarse
    let usuarioGuardado = localStorage.getItem("usuarioGuardado");
    let claveGuardada = localStorage.getItem("claveGuardada");

    // Verificamos si coinciden con los datos guardados O con el admin por defecto
    if ((email === usuarioGuardado && password === claveGuardada) || (email === "admin@gmail.com" && password === "1234")) {
        alert("¡Inicio de sesión exitoso. Bienvenido!");
        window.location.href = "../index.html";
    } else {
        alert("Credenciales incorrectas o el usuario no existe.");
    }
  });
}
