class Producto {
  constructor(tipo, nombre, tamanio, id, stock) {
    this.tipo = tipo.toUpperCase();
    this.nombre = nombre.toUpperCase();
    this.tamanio = tamanio.toUpperCase();
    this.stock = stock;
    this.id = parseInt(id);
    this.precio;
    this.vendido;
  }

  aumentarStock(numero){
        numero = parseInt(numero);
        this.stock = this.stock + numero

  }
  vender() {
    if (this.tipo == "ACEITUNAS" && this.tamanio == "GRANDE") {
      this.precio = 350;
    } else if (this.tipo == "ACEITUNAS" && this.tamanio == "CHICO") {
      this.precio = 250;
    } else if (this.tipo == "QUESOS") {
      this.precio = 400;
    }

    if (this.stock != 0) {
      this.vendido = true;
      this.stock -= 1;

      //agregando etiqueta
      let parrafoVenta = document.createElement("p");
      parrafoVenta.innerHTML = `<p id="parrafoVenta">Hola, gracias por comprar ${this.tipo.toLowerCase()} ${this.nombre.toLowerCase()} el precio total es de $${this.precio} </p>`;
      return document.getElementById("precioFinal").appendChild(parrafoVenta);
    } else {
      return "Lo sentimos, no hay stock";
    }
  }
}
const productos = [];
  //Aceitunas comunes chicas
productos.push(new Producto("aceitunas", "roquefort", "chico", "1", 20));
productos.push(new Producto("aceitunas", "holanda", "chico", "2", 20));
productos.push(new Producto("aceitunas", "cheddar", "chico", "3", 20));
productos.push(new Producto("aceitunas", "crudo", "chico", "4", 20));
productos.push(new Producto("aceitunas", "salame", "chico", "5", 20));
productos.push(new Producto("aceitunas", "mix clasico", "chico", "6", 20));
productos.push(new Producto("aceitunas", "mix quesos", "chico", "7", 20));
productos.push(new Producto("aceitunas", "mix picada", "chico", "8", 20));

//aceitunas comunes grandes
productos.push(new Producto("aceitunas", "roquefort", "grande", "9", 20));
productos.push(new Producto("aceitunas", "holanda", "grande", "10", 20));
productos.push(new Producto("aceitunas", "cheddar", "grande", "11", 20));
productos.push(new Producto("aceitunas", "crudo", "grande", "12", 20));
productos.push(new Producto("aceitunas", "salame", "grande", "13", 20));
productos.push(new Producto("aceitunas", "mix clasico", "grande", "14", 20));
productos.push(new Producto("aceitunas", "mix quesos", "grande", "15", 20));
productos.push(new Producto("aceitunas", "mix picada", "grande", "16", 20));

//aceitunas comunes deluxe (no vienen grandes)
productos.push(new Producto("aceitunas", "almendras", "chico", "17", 20));
productos.push(new Producto("aceitunas", "capresse", "chico", "18", 20));
productos.push(new Producto("aceitunas", "palmitos", "chico", "19", 20));
productos.push(new Producto("aceitunas", "ajo", "chico", "20", 20));

//quesos
productos.push(new Producto("quesos", "picante", "", "21", 20));
productos.push(new Producto("quesos", "pimienta", "", "22", 20));
productos.push(new Producto("quesos", "mediterraneo", "", "23", 20));  

//almacenar elementos iniciales con JSON + guardarlos en el storage
localStorage.setItem("productos",JSON.stringify(productos))


//evaluar lo guardado
for (let index = 0; index < localStorage.length; index++) {
    let clave = localStorage.key(index)
    console.log("clave:" + clave)
    console.log(localStorage.getItem(clave))
}

//recuperar los datos y trbajar con ellos
let almacenados = [];
almacenados = JSON.parse(localStorage.getItem("productos"));
almacenados = productos
for (const iterator of almacenados) {
    iterator.aumentarStock(3)
    localStorage.setItem("productos",JSON.stringify(almacenados))
}










//captura de envento submit
let miForm = document.getElementById("producto");

miForm.addEventListener("submit", validarForm);
function validarForm(e) {
  e.preventDefault();
  var formulario = e.target;
  var valorRelleno = formulario.children[1].value;
  const primerFiltro = productos.filter(
    (relleno) => relleno.nombre == valorRelleno.toUpperCase()
  );
    var valorTamanio = formulario.children[3].value;
const segundoFiltro = primerFiltro.filter(medida => medida.tamanio == valorTamanio.toUpperCase())
  if (segundoFiltro.length > 0) {
    for (const i of segundoFiltro) {
      i.vender();
    }
  } else {
    console.log("algo salio mal");
  }
}



