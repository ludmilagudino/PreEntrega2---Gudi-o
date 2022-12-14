//SIMULADOR E-COMMERCE VELAS DE 


//Constructor de productos
class Producto {
    constructor(nombre, precio, esencia) {
        this.nombre = nombre;
        this.precio = precio;
        this.esencia = esencia;
        this.disponible = true;
    }

    Vender(){
        this.disponible = false;
    }
}

const velas = [];
var cargaProductos = prompt("Ingrese nombre del producto o 'fin' para terminar la carga");

//Carga de productos mediante consola

while (cargaProductos != "fin"){
    let nombre = cargaProductos;
    let precio = prompt("Ingrese el precio del producto: ");
    let esencia = prompt("Ingrese esencia de la vela: ");

    velas.push(new Producto(nombre, precio, esencia));

    var cargaProductos = prompt("Ingrese nombre del producto o 'fin' para terminar la carga");
    
}
//Array con productos cargados
console.log(velas);






    