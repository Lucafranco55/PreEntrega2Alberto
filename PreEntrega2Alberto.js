//proyecto de control de stock

const producto = parseInt(
  prompt(
    "Ingrese el producto que quieras comprar: 1. Yerba - 2. Azucar - 3.Galletitas - 4.Mermelada"
  )
);
let totalCompra = 0;
let seguirComprando = true;
let decision;

class Product {
  constructor(ubi, name, price) {
    this.ubi = ubi;
    this.name = name;
    this.price = price;
  }
}
const productosArray = [];
let productoEscogido;

const Yerba = new Product(1, "yerba", 700);
productosArray.push(Yerba);
const Azucar = new Product(2, "azucar", 250);
productosArray.push(Azucar);
const Galletitas = new Product(3, "galletitas", 1000);
productosArray.push(Galletitas);
const Mermelada = new Product(4, "mermelada", 400);
productosArray.push(Mermelada);

const productosExistentes = [Yerba, Azucar, Galletitas, Mermelada];
console.log(productosExistentes);
//let seleccionProducto = true
//let infoProductoSeleccionado;

//while (seguirComprando === true)-
while (seguirComprando === true) {
  const productoCliente = productosExistentes.find(
    (producto) => producto.ubi === productoEscogido
  );
  if (productoCliente) {
    totalCompra = totalCompra + productoCliente.price;
  } else {
    productoEscogido = parseInt(
      prompt(
        "Selecciona el producto habilitado: 1.Yerba - 2.Azucar - 3.Galletitas - 4.Mermelada "
      )
    );
  }
  continue;
}
console.log(productoCliente);

decision = parseInt(prompt("Quieres seguir comprando? 1. Si - 2. No"));
if (decision === 1) {
  producto = parseInt(
    prompt(
      'Seleccionar el producto que quieras comprar 1. Yerba - 2. Azucar - 3.Galletitas - 4.Mermelada"'
    )
  );
} else {
  seguirComprando === false;
}
alert(`el total de tu compra es ${totalCompra}`);
