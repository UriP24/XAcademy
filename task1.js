/* 
1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta 
ese numero.
*/


console.log("Activity 1");

function build_pyramid(num){
    let result = [];
    let numbers = [];
    for (let i = 1; i <= num; i++) {
        numbers = numbers + i
        result = result + numbers + "\n";
    }
    return result;
}

console.log(build_pyramid(5));


/* 
2) Escribir una funcion que reciba 2 array y devuelva un array con todos los 
elementos que coinciden entre ellos
*/

console.log("Activity 2")

let array1 = ['rojo', 'azul', 'amarillo'];
let array2 = ['blanco', 'negro', 'rojo'];
 // Create an array for common items in another two arrays.
function common_element(array1, array2){
    let array_match = [];
    for (let counter_array1 = 0; counter_array1 < array1.length; counter_array1++) {
        for (let counter_array2 = 0; counter_array2 < array2.length; counter_array2++) {
            if (array1[counter_array1] == array2[counter_array2]) { // If the item is common in both arrays
                array_match.push(array1[counter_array1]);  //Push common items to the array
             }
        }
    }
    return array_match;  // Return the common items

}

let item_common = common_element(array1, array2);
console.log("Common elements between 2 arrays: " + "\n", item_common)


/*
3.1) Dado el siguiente objeto
let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
} 

Crear las clases necesarias para generar carritos respetando la estructura del objeto 
dado.
3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice 
el montoTotal.
3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e 
imprimir un mensaje si el item ya existe “ya existe xxx con yyy unidades”.
*/


class Cart {
    constructor(amount_total, product) {
        this.amount_total = amount_total; // Refers to the total price of all products
        this.product = [product];
    }

    addProduct(name_product, price, quantity){
        let price_total = price * quantity; // Refers to the total price of the product
        try{
            if (this.product.includes(name_product)){
                throw new Error("This product is already in your cart with ${quantity} units");
            }
        }catch(error){
            return error;
        }
        
        this.amount_total += price_total;
        this.product.push(name_product)
    }
}
let first_cart = new Cart(100, 'Sugar');
first_cart.addProduct('Cookies', 250, 2);
console.log(first_cart);

// nota: modificar la verificacion de nombre