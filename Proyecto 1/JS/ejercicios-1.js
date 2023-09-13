//Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule el precio total que vas a pagar por tu compra.
//Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicasr precio por el iva y dividir por 100.

var precio = parseInt(prompt("Ingrese el precio"))

var igv = 21

precioTotal = precio + precio * igv / 100

alert("El precio total es " + precioTotal)

//En este ejercicio vas a pedir al usuario que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.
//Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3.

var num1 = parseInt(prompt("Ingrese un numero"))
var num2 = parseInt(prompt("Ingrese un numero"))
var num3 = parseInt(prompt("Ingrese un numero"))

var sumTotal = num1 + num2 + num3

var media = sumTotal / 3

alert("La media de los tres numeros colocos son: " + media)

//Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

var i = 0

do {
    var numero = prompt("Ingrese un numero")

    if (Number(numero) == numero) {
        i + numero
    }
    else {
        if (numero != undefined) {
            alert(numero + " No es un numero")
        }
    }
}
while (numero != undefined);
document.write(i);

//Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de indentidad).

//El algoritmo para calcular la letra del dni es el siguiente :

//El número debe ser entre 0 y 99999999
//Debemos calcular el resto de la división entera entre el número y el número 23.
//Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
//Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
//Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

do {
    var dni = prompt("Ingrese su dni")
    var letra = ""

    if (Number(dni) == dni) {
        if (0 <= dni && dni <= 99999999) {
            resto = dni % 23

            switch (resto) {
                case (0):
                    letra = "A";
                    break
                case (1):
                    letra = "B";
                    break
                case (2):
                    letra = "C";
                    break
                case (3):
                    letra = "D";
                    break
                case (4):
                    letra = "E";
                    break
                case (5):
                    letra = "F";
                    break
                case (6):
                    letra = "G";
                    break
                case (7):
                    letra = "H";
                    break
                case (8):
                    letra = "I";
                    break
                case (9):
                    letra = "J";
                    break
                case (10):
                    letra = "K";
                    break
                case (11):
                    letra = "L";
                    break
                case (12):
                    letra = "M";
                    break
                case (13):
                    letra = "N";
                    break
                case (14):
                    letra = "O";
                    break
                case (15):
                    letra = "P";
                    break
                case (16):
                    letra = "Q";
                    break
                case (17):
                    letra = "R";
                    break
                case (18):
                    letra = "S";
                    break
                case (19):
                    letra = "T";
                    break
                case (20):
                    letra = "W";
                    break
                case (21):
                    letra = "X";
                    break
                case (22):
                    letra = "Y";
                    break
                case (23):
                    letra = "Z";
                    break
                default:
                    alert("No es un numero")
            }
            alert("El numero de dni es: " + dni + " y su letra es: " + letra)
        }
        else {
            if (dni != undefined) {
                alert("Usted no a ingresado un dni")
            }
        }
    }
}
while (dni != undefined);

//Vamos a empezar fuerte con un bucle for doble para imprimir números
//Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

//1
//22
//333
//4444
//55555
//666666

var numero = prompt("Ingrese un numero")

if (Number(numero) == numero) {
    if (numero >= 9 && numero <= 30) {
        var i, rep
        for (i = numero; i >= 1; i--) {
            for (rep = i; rep >= 1; rep--) {
                document.write(i)
            }
            document.write("<br>")
        }
    }
    else {
        alert("Introducir un numero de acuerdo a los parametros")
    }
}
else {
    if (numero != undefined) {
        alert("Ingrese un numero valido")
    }
}
