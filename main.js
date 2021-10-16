class Producto {
  constructor(tipo, nombre, tamanio, id, stock) {
    this.tipo = tipo.toUpperCase();
    this.nombre = nombre.toUpperCase();
    this.tamanio = tamanio.toUpperCase();
    this.stock = stock;
    this.id = parseInt(id);
    this.precio;
    this.vendido = 0;
  }

  aumentarStock(numero){
        numero = parseInt(numero);
        this.stock = this.stock + numero

  }
  vender(cantidad) {
    cantidad = parseInt(cantidad)
    if (this.tipo == "ACEITUNAS" && this.tamanio == "GRANDE") {
      this.precio = 350;
    } else if (this.tipo == "ACEITUNAS" && this.tamanio == "CHICO") {
      this.precio = 250;
    } else if (this.tipo == "QUESOS") {
      this.precio = 400;
    }

    if (this.stock > cantidad ) {
      
      this.stock = (this.stock - cantidad);
        $("#precioFinal").empty()
       $("#precioFinal").prepend(`<p id="parrafoVenta">Hola, gracias por comprar ${this.tipo.toLowerCase()} ${this.nombre.toLowerCase()} el precio total es de $${this.precio} </p> x ${cantidad}`);
    } else {
        swal("Lo sentimos!", `actualmente no contamos con stock en el producto ${this.tipo.toLowerCase()} ${this.nombre.toLowerCase()}`,{
          icon: "error",
          button: true,
        })
    }
  }
}
const productos = [];
  //Aceitunas comunes chicas
productos.push(new Producto("aceitunas", "roquefort", "chico", "1", 3));
productos.push(new Producto("aceitunas", "holanda", "chico", "2", 3));
productos.push(new Producto("aceitunas", "cheddar", "chico", "3", 3));
productos.push(new Producto("aceitunas", "crudo", "chico", "4", 3));
productos.push(new Producto("aceitunas", "salame", "chico", "5", 3));
productos.push(new Producto("aceitunas", "mix clasico", "chico", "6", 3));
productos.push(new Producto("aceitunas", "mix quesos", "chico", "7", 3));
productos.push(new Producto("aceitunas", "mix picada", "chico", "8", 3));

//aceitunas comunes grandes
productos.push(new Producto("aceitunas", "roquefort", "grande", "9", 3));
productos.push(new Producto("aceitunas", "holanda", "grande", "10", 3));
productos.push(new Producto("aceitunas", "cheddar", "grande", "11", 3));
productos.push(new Producto("aceitunas", "crudo", "grande", "12", 3));
productos.push(new Producto("aceitunas", "salame", "grande", "13", 3));
productos.push(new Producto("aceitunas", "mix clasico", "grande", "14", 3));
productos.push(new Producto("aceitunas", "mix quesos", "grande", "15", 3));
productos.push(new Producto("aceitunas", "mix picada", "grande", "16", 3));

//aceitunas comunes deluxe (no vienen grandes)
productos.push(new Producto("aceitunas", "almendras", "chico", "17", 3));
productos.push(new Producto("aceitunas", "capresse", "chico", "18", 3));
productos.push(new Producto("aceitunas", "palmitos", "chico", "19", 3));
productos.push(new Producto("aceitunas", "ajo", "chico", "20", 3));

//quesos
productos.push(new Producto("quesos", "picante", "", "21", 3));
productos.push(new Producto("quesos", "pimienta", "", "22", 3));
productos.push(new Producto("quesos", "mediterraneo", "", "23", 3));  

//almacenar elementos iniciales con JSON + guardarlos en el storage
localStorage.setItem("productos",JSON.stringify(productos))



//captura de envento submit


$("#producto").submit(function (e) {
  e.preventDefault();
  let hijos = $(e.target).children();
  var valorRelleno = hijos[1].value;
  const primerFiltro = productos.filter(
    (relleno) => relleno.nombre == valorRelleno.toUpperCase()
  );
    var valorTamanio =  hijos[3].value;
    var valorCant = hijos[5].value
const segundoFiltro = primerFiltro.filter(medida => medida.tamanio == valorTamanio.toUpperCase())
  if (segundoFiltro.length > 0) {
    for (const i of segundoFiltro) {
      i.vender(valorCant);
    }
  } else {
    console.log("algo salio mal");
  }
}
);

