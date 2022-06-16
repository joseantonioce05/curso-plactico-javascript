// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioCOnDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioCOnDescuento) / 100;

  return precioConDescuento
}



// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioCOnDescuento,
//   precioConDescuento,
// });