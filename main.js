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
productos.push(new Producto("quesos", "picante","","21","20"));
productos.push(new Producto("quesos", "pimienta","","22","20"));
productos.push(new Producto("quesos", "mediterraneo","","23","20"));

var producto1 = prompt("Indique el producto a llevar: aceituns chicas, aceitunas grandes o quesos");

if(producto1.toUpperCase() == "QUESOS"){

    var producto2 = prompt("picante, mediterraneo o pimienta?");

    if(producto2.toUpperCase() == "PIMIENTA"){
        const pimienta = productos.filter(relleno => relleno.nombre == "PIMIENTA");
        for (const frasco of pimienta) {
            frasco.vender();
        }
    }else if(producto2.toUpperCase()== "MEDITERRANEO"){
        const mediterraneo = productos.filter(relleno => relleno.nombre == "MEDITERRANEO" );
        for(const frasco of mediterraneo){
            frasco.vender();
        }
    }else if(producto2.toUpperCase()=="PICANTE"){
        const picante = productos.filter(relleno => relleno.nombre == "PICANTE")
        for(const frasco of picante){
            frasco.vender();
        }
    }else{
        alert(producto2 + " no es un sabor de quesos valido.")
    }

}else if(producto1.toUpperCase() == "ACEITUNAS CHICAS"){

    const aceitunasChicas = productos.filter(producto => producto.tamanio =="CHICO");
    var producto3 = prompt("almendras, capresse, ajo, palmitos, mix picada, mix quesos, mix clasico, salame, crudo, cheddar, holanda o roquefort?")
    producto3 = producto3.toUpperCase();

    if(producto3 == "ALMENDRAS"){
        const almendrasChico = aceitunasChicas.filter(relleno => relleno.nombre == "ALMENDRAS");
        for(const frasco of almendrasChico){
            frasco.vender();
        }

    }else if(producto3 =="CAPRESSE"){
        const capresseChico = aceitunasChicas.filter(relleno => relleno.nombre == "CAPRESSE");
        for(const frasco of capresseChico){
            frasco.vender();
        }

    }else if(producto3 == "AJO"){
        const ajoChico = aceitunasChicas.filter(relleno => relleno.nombre == "AJO");
        for(const frasco of ajoChico){
            frasco.vender();
        }

    }else if(producto3 == "PALMITOS"){
        const palmitosChico = aceitunasChicas.filter(relleno => relleno.nombre == "PALMITOS");
        for(const frasco of palmitosChico){
            frasco.vender();
        }

    }else if(producto3 == "MIX PICADA"){
        const mixPicadaChico = aceitunasChicas.filter(relleno => relleno.nombre == "MIX PICADA");
        for(const frasco of mixPicadaChico){
            frasco.vender();
        }

    }else if(producto3 == "MIX QUESOS"){
        const mixQuesosChico = aceitunasChicas.filter(relleno => relleno.nombre == " MIX QUESOS" );
        for(const frasco of mixQuesosChico){
            frasco.vender();
        }

    }else if(producto3 == "MIX CLASICO"){
        const mixClasicoChico = aceitunasChicas.filter(relleno => relleno.nombre == "MIX CLASICO");
        for(const frasco of mixClasicoChico){
            frasco.vender();
        }

    }else if(producto3 == "SALAME"){
        const salameChico = aceitunasChicas.filter(relleno => relleno.nombre == "SALAME");
        for(const frasco of salameChico){
            frasco.vender();
        }

    }else if(producto3 == "CRUDO"){
        const crudoChico = aceitunasChicas.filter(relleno => relleno.nombre == "CRUDO");
        for(const frasco of crudoChico){
            frasco.vender();
        }

    }else if(producto3 == "CHEDDAR" ){
        const cheddarChico = aceitunasChicas.filter(relleno => relleno.nombre == "CHEDDAR");
        for (const frasco of cheddarChico){
            frasco.vender();
        }

    }else if (producto3 == "HOLANDA"){
        const holandaChico = aceitunasChicas.filter(relleno => relleno.nombre == "HOLANDA");
        for(const frasco of holandaChico){
            frasco.vender();
        }

    }else if(producto3 == "ROQUEFORT"){
        const roqueChico = aceitunasChicas.filter(relleno => relleno.nombre == "ROQUEFORT");
        for(const frasco of roqueChico){
            frasco.vender();
        }  

     }
}else if(producto1.toUpperCase() == "ACEITUNAS GRANDES"){
    const aceitunasGrandes = productos.filter(producto => producto.tamanio =="GRANDE");
    var producto4 = prompt("mix picada, mix quesos, mix clasico, salame, crudo, cheddar, holanda o roquefort?")
    producto4 =  producto4.toUpperCase();
    if(producto4 == "MIX PICADA"){
        const mixPicadaGrande = aceitunasGrandes.filter(relleno => relleno.nombre == "MIX PICADA");
        for(const frasco of mixPicadaGrande){
            frasco.vender();
        }

    }else if(producto4 == "MIX QUESOS"){
        const mixQuesosGrande = aceitunasGrandes.filter(relleno => relleno.nombre == " MIX QUESOS" );
        for(const frasco of mixQuesosGrande){
            frasco.vender();
        }

    }else if(producto4 == "MIX CLASICO"){
        const mixClasicoGrande = aceitunasGrandes.filter(relleno => relleno.nombre == "MIX CLASICO");
        for(const frasco of mixClasicoGrande){
            frasco.vender();
        }

    }else if(producto4 == "SALAME"){
        const salameGrande = aceitunasGrandes.filter(relleno => relleno.nombre == "SALAME");
        for(const frasco of salameGrande){
            frasco.vender();
        }

    }else if(producto4 == "CRUDO"){
        const crudoGrande = aceitunasGrandes.filter(relleno => relleno.nombre == "CRUDO");
        for(const frasco of crudoGrande){
            frasco.vender();
        }

    }else if(producto4 == "CHEDDAR" ){
        const cheddarGrande = aceitunasGrandes.filter(relleno => relleno.nombre == "CHEDDAR");
        for (const frasco of cheddarGrande){
            frasco.vender();
        }

    }else if (producto4 == "HOLANDA"){
        const holandaGrande = aceitunasGrandes.filter(relleno => relleno.nombre == "HOLANDA");
        for(const frasco of holandaGrande){
            frasco.vender();
        }

    }else if(producto4 == "ROQUEFORT"){
        const roqueGrande = aceitunasGrandes.filter(relleno => relleno.nombre == "ROQUEFORT");
        for(const frasco of roqueGrande){
            frasco.vender();
        }  

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






