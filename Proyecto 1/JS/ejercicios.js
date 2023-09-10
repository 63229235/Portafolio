//Pide la edad y si es mayor de 18 años indica que ya puede conducir.
do{
var edad = prompt("Introduce la edad")

if (Number(edad) == edad) {
    if(edad > 0 && edad <= 99){
        if (edad > 18) {
            alert("Usted puede conducir")
        }
    
        else{
            alert("Usted no tiene edad para conducir")
        }
    }
    else{
        if(edad != undefined){
            alert("Error")
        }
    }
}
}
while(edad != undefined);

//Pide una nota (número). Muestra la calificación según la nota:
//0-3: Muy deficiente
//3-5: Insuficiente
//5-6: Suficiente
//6-7: Bien
//7-9: Notable
//9-10: Sobresaliente

do{
    var nota = prompt("Intrduce tu nota (Entre 0 y 10)")

    if(Number(nota) == nota){
        if(nota >= 0 && nota <= 10){
            if(nota < 3){
                alert("Muy deficiente")
            }
            else if(nota < 5){
                alert("Insuficiente")
            }
            else if(nota < 6){
                alert("Suficiente")
            }
            else if(nota < 7){
                alert("Bien")
            }
            else if(nota < 9){
                alert("Notable")
            }
            else if(nota <= 10){
                alert("Sobresaliente")
            }
        }
        else{
            alert("Introducir una nota de acuerdo a los parametros")
        }
    }
    else{
        if(nota != undefined){
            alert("Error")
        }
    }
}
while(nota != undefined);
