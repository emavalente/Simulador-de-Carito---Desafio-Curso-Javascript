// Simulador de Carrito de compras.

alert('Bienvenido a Tienda Cluster Efectos 1.3.22');

// Declaración de variables:
let opcionesDeInicio;
let productoSelec;
let nombreProducto;
let cantidadProducto = 0;
let precioProducto;
let costoTotal = 0;
let formaDePago;
let continuarCompra = false;

// Declaracion de funciones:
const agregarAlCarrito = () => {
    do {
        productoSelec = parseInt(prompt('Ingresa el Nº de producto que quieres:\n1 - JAMINABOX\n2 - SPIRIT\n3 - CLASSICVIBE'));
        switch (productoSelec) {
            case 1:
                precioProducto = 17500;
                nombreProducto = "JAMINABOX";
                alert('Producto seleccionado: ' + nombreProducto + '\nPrecio del producto: $' + precioProducto);
                indicarCantidadProductos();
                break;

            case 2:
                precioProducto = 18500;
                nombreProducto = "SPIRIT";
                alert('Producto seleccionado: ' + nombreProducto + '\nPrecio del producto: $' + precioProducto);
                indicarCantidadProductos();
                break;

            case 3:
                precioProducto = 22500;
                nombreProducto = "CLASSICVIBE";
                alert('Producto seleccionado: ' + nombreProducto + '\nPrecio del producto: $' + precioProducto);
                indicarCantidadProductos();
                break;

            default:
                alert('Opcion Incorrecta, Intente nuevamente.');
                productoSelec = "Error";
                break;
        }
    } while (productoSelec === "Error");
};

const indicarCantidadProductos = () => {
    cantidadProducto = Number(prompt('Indique la cantidad que desea comprar:'));
    if (cantidadProducto !== "" && cantidadProducto > 0) {
        calcularTotal();
        alert('El total de su compra es: $' + costoTotal);
    } else {
        alert('No ingreso ninguna cantidad!.');
        productoSelec = "Error";
    };
};

const calcularTotal = () => {
    return costoTotal += precioProducto * cantidadProducto;

};


const seleccionDePago = () => {
    do {
        formaDePago = parseInt(prompt('Como desea pagar?\n1- Contado\n2- 3 cuotas fijas (Sin Interes)\n3- Cancelar Compra'));
        switch (formaDePago) {
            case 1:
                alert('El pago a sido realizado con exito!');
                break;

            case 2:
                let costoEnCuotas = Math.round(costoTotal / 3);
                alert('Su pago será de 3 cuotas de $' + costoEnCuotas);
                alert('El pago a sido realizado con exito!');
                break;

            case 3:
                alert('La compra a sido cancelada');
                opcionesDeInicio = 2;
                break;

            default:
                alert('Opcion Incorrecta, Intente nuevamente.');
                break;
        }

    } while (formaDePago !== 1 && formaDePago !== 2 && formaDePago !== 3);
}

//Inicio del algoritmo:
do {
    opcionesDeInicio = parseInt(prompt('Elige una opcion:\n1 - COMPRAR\n2 - SALIR'));
    switch (opcionesDeInicio) {
        case 1:
            do {
                agregarAlCarrito(); // Agregar Productos
                continuarCompra = confirm('Quiere agregar mas productos?');
            } while (continuarCompra);
            seleccionDePago(); // Seleccion de Formas de pago.
            continuarCompra = confirm('Quiere realizar otra compra?');
            if (continuarCompra === true) {
                opcionesDeInicio = 1; // Reinicia el programa.
                costoTotal = 0;
            } else {
                opcionesDeInicio = 2; // Sale del programa.
            }
            break;

        case 2:
            break; // Sale del programa.

        default:
            alert('Opcion Incorrecta, Intente nuevamente.'); // Reinicia el programa.
            break;
    };
} while (opcionesDeInicio !== 2);
alert('Gracias por utilizar Tienda Cluster Efectos 1.3.22, BYE!');