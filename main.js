class Producto{
    constructor(tipo,nombre,tamanio, id,stock){
        this.tipo = tipo.toUpperCase();
        this.nombre = nombre.toUpperCase();
        this.tamanio = tamanio.toUpperCase();
        this.stock = parseInt(stock);
        this.id = parseInt(id);
        this.precio; 
        this.vendido;

}


    vender(){
    if (this.producto == "ACEITUNAS" && this.tamanio == "GRANDE") {
        this.precio = 350;           
    }else if (this.producto == "ACEITUNAS" && this.tamanio == "CHICO") {
        this.precio = 250;
    }else if(this.producto == "QUESOS"){
        this.precio = 400;
    }
    
    if (this.stock != 0) {
        this.vendido = true;
        this.stock =- 1;
        return "gracias por comprar el precio total es de " + this.precio
    }else{
        return "Lo sentimos, no hay stock"
    }
}
}
const productos = [];

//Aceitunas comunes chicas
productos.push(new Producto("aceitunas", "roquefort","chico","1","20"));
productos.push(new Producto("aceitunas", "holanda","chico","2","20"));
productos.push(new Producto("aceitunas", "cheddar","chico","3","20"));
productos.push(new Producto("aceitunas", "crudo","chico","4","20"));
productos.push(new Producto("aceitunas", "salame","chico","5","20"));
productos.push(new Producto("aceitunas", "mix clasico","chico","6","20"));
productos.push(new Producto("aceitunas", "mix quesos","chico","7","20"));
productos.push(new Producto("aceitunas", "mix picada","chico","8","20"));

//aceitunas comunes grandes
productos.push(new Producto("aceitunas", "roquefort","grande","9","20"));
productos.push(new Producto("aceitunas", "holanda","grande","10","20"));
productos.push(new Producto("aceitunas", "cheddar","grande","11","20"));
productos.push(new Producto("aceitunas", "crudo","grande","12","20"));
productos.push(new Producto("aceitunas", "salame","grande","13","20"));
productos.push(new Producto("aceitunas", "mix clasico","grande","14","20"));
productos.push(new Producto("aceitunas", "mix quesos","grande","15","20"));
productos.push(new Producto("aceitunas", "mix picada","grande","16","20"));

//aceitunas comunes deluxe (no vienen grandes)
productos.push(new Producto("aceitunas", "almendras","chico","17","20"));
productos.push(new Producto("aceitunas", "capresse","chico","18","20"));
productos.push(new Producto("aceitunas", "palmitos","chico","19","20"));
productos.push(new Producto("aceitunas", "ajo","chico","20","20"));

//quesos
productos.push(new Producto("quesos", "picante","grande","21","20"));
productos.push(new Producto("quesos", "pimienta","grande","22","20"));
productos.push(new Producto("quesos", "mediterraneo","grande","23","20"));

const quesos = productos.filter("quesos")

console.log(quesos)