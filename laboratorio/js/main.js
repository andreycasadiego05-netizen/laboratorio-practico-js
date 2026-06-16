let nom = "  teclado gamer   ";
let precio = 120000;
let cantidad = 2;
let descuento = 10000;
let disponible = true;

function Subtotal(p, c) {
    return p * c;
}
function Total(sub, desc) {
    return sub - desc;
}
let subtotal = Subtotal(precio, cantidad);
let total = Total(subtotal, descuento);
let nomLimpio = nom.trim();
let nomMayusculas = nomLimpio.toUpperCase();
let PalabraClave = nomLimpio.toLowerCase().includes("gamer");

let categorias = [
    "Tecnología",
    "Periféricos",
    "Gaming",
    "Computadores",
    "Laptops",
    "Monitores",
];
let producto = {
    nombre: nomMayusculas,
    precio: precio,
    cantidad: cantidad,
    disponible: disponible,
    categorias: categorias
};


console.log("Producto: " + producto.nombre);
console.log("Precio unitario: " + producto.precio);
console.log("Cantidad: " + producto.cantidad);
console.log("Subtotal: " + subtotal);
console.log("Descuento: " + descuento);
console.log("Total a pagar: " + total);

console.log("Producto disponible: " + producto.disponible);
console.log("Contiene palabra clave gamer: " + PalabraClave);
console.log("Primera categoría: " + producto.categorias[0]);
console.log("Total de categorías: " + producto.categorias.length);

if (total >= 200000 && producto.disponible) {
    console.log("Aplica envío gratis");
}