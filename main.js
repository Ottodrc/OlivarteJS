class Producto{
    constructor(tipo,nombre,tamanio, id,stock){
        this.tipo = tipo.toUpperCase();
        this.nombre = nombre.toUpperCase();
        this.tamanio = tamanio.toUpperCase();
        this.stock = stock;
        this.id = parseInt(id);
        this.precio; 
        this.vendido;

}

    vender(){
    if (this.tipo == "ACEITUNAS" && this.tamanio == "GRANDE") {
        this.precio = 350;           
    }else if (this.tipo == "ACEITUNAS" && this.tamanio == "CHICO") {
        this.precio = 250;
    }else if(this.tipo == "QUESOS"){
        this.precio = 400;
    }  

    if (this.stock != 0) {
        this.vendido = true;
        this.stock -= 1;
        //agregando etiqueta
        let parrafoVenta = document.createElement("p") 
        parrafoVenta.innerHTML= ` Hola, gracias por comprar ${this.tipo.toLowerCase()} ${this.nombre.toLowerCase()} el precio total es de $${this.precio} `
        return document.getElementById("contenedor").appendChild(parrafoVenta);
      
    }else{
        return "Lo sentimos, no hay stock"
    }






}
}
const productos = [];

//Aceitunas comunes chicas
productos.push(new Producto("aceitunas", "roquefort","chico","1",20));
productos.push(new Producto("aceitunas", "holanda","chico","2",20));
productos.push(new Producto("aceitunas", "cheddar","chico","3",20));
productos.push(new Producto("aceitunas", "crudo","chico","4",20));
productos.push(new Producto("aceitunas", "salame","chico","5",20));
productos.push(new Producto("aceitunas", "mix clasico","chico","6",20));
productos.push(new Producto("aceitunas", "mix quesos","chico","7",20));
productos.push(new Producto("aceitunas", "mix picada","chico","8",20));

//aceitunas comunes grandes
productos.push(new Producto("aceitunas", "roquefort","grande","9",20));
productos.push(new Producto("aceitunas", "holanda","grande","10",20));
productos.push(new Producto("aceitunas", "cheddar","grande","11",20));
productos.push(new Producto("aceitunas", "crudo","grande","12",20));
productos.push(new Producto("aceitunas", "salame","grande","13",20));
productos.push(new Producto("aceitunas", "mix clasico","grande","14",20));
productos.push(new Producto("aceitunas", "mix quesos","grande","15",20));
productos.push(new Producto("aceitunas", "mix picada","grande","16",20));

//aceitunas comunes deluxe (no vienen grandes)
productos.push(new Producto("aceitunas", "almendras","chico","17",20));
productos.push(new Producto("aceitunas", "capresse","chico","18",20));
productos.push(new Producto("aceitunas", "palmitos","chico","19",20));
productos.push(new Producto("aceitunas", "ajo","chico","20",20));

//quesos
productos.push(new Producto("quesos", "picante","","21","20"));
productos.push(new Producto("quesos", "pimienta","","22","20"));
productos.push(new Producto("quesos", "mediterraneo","","23","20"));

var producto1 = prompt("Indique el producto a llevar: aceituns chicas, aceitunas grandes o quesos");

if(producto1.toUpperCase() == "QUESOS"){

    var producto           = prompt("picante, mediterraneo o pimienta?"); 

    const productoFiltrado = productos.filter(relleno => relleno.nombre == producto.toUpperCase());
    
    if (productoFiltrado.length > 0){ // con esta validación sabemos si es que el filtro tuvo algún resultado
    
        for(const frasco of productoFiltrado){
    
             frasco.vender();
    
        }
    
    } else {
    
      alert(producto + " no es un sabor de quesos válido.")
    
    }

}else if(producto1.toUpperCase() == "ACEITUNAS CHICAS"){

    const aceitunasChicas  = productos.filter(producto => producto.tamanio =="CHICO");

    var producto2          = prompt("almendras, capresse, ajo, palmitos, mix picada, mix quesos, mix clasico, salame, crudo, cheddar, holanda o roquefort?")
    
    const productoFiltrado = aceitunasChicas.filter(relleno => relleno.nombre == producto2.toUpperCase());
    
    if (productoFiltrado.length > 0){ // con esta validación sabemos si es que el filtro tuvo algún resultado
    
        for(const frasco of productoFiltrado){
    
             frasco.vender();
    
        }
    
    } else {
    
      alert(producto + " no es un sabor de aceitunas chicas válido.")
    
    }
}else if(producto1.toUpperCase() == "ACEITUNAS GRANDES"){
    const aceitunasGrandes = productos.filter(producto => producto.tamanio =="GRANDE");

    var producto3         = prompt("mix picada, mix quesos, mix clasico, salame, crudo, cheddar, holanda o roquefort?");

    const productoFiltrado = aceitunasGrandes.filter(relleno => relleno.nombre == producto3.toUpperCase());
    
    if (productoFiltrado.length > 0){ // con esta validación sabemos si es que el filtro tuvo algún resultado
    
        for(const frasco of productoFiltrado){
    
             frasco.vender();
    
        }
    
    } else {
    
      alert(producto + " no es un sabor de aceitunas grandes válido.")
    
    }
}


//modificando una etiqueta
var cantidades     = document.getElementsByClassName("cantidad");
for (let index = 0; index <=3; index++) {

    for (const element of cantidades) {
    element.remove()
}    
}

var precio = document.getElementsByClassName("precio")
for (const element of precio) {
    var nuevaCant = document.createElement("p");
    nuevaCant.innerHTML = `cant: 19`
    element.appendChild(nuevaCant)
}






