//Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule el precio total que vas a pagar por tu compra.
//Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicasr precio por el iva y dividir por 100.

var precio = parseInt(prompt("Ingrese el precio"))

var igv = 21

precioTotal = precio + precio * igv/100

alert("El precio total es " + precioTotal)

//En este ejercicio vas a pedir al usuario que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.
//Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3.

var num1 = parseInt(prompt("Ingrese un numero"))
var num2 = parseInt(prompt("Ingrese un numero"))
var num3 = parseInt(prompt("Ingrese un numero"))

var sumTotal = num1 + num2 + num3

var media = sumTotal/3

alert("La media de los tres numeros colocos son: " + media)