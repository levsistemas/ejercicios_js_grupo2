printButton('U3P15', 'Unidad 3 Punto 15')

function U3P15(){
    console.log('UNIDAD 3')

    console.log('Punto 15')
    var numero;
    numero=prompt("Ingrese valor del número para saber si es par o impar");

    if(numero==0) {
        console.log ("El número introducido es 0")
    } else {
        if (numero % 2 == 0 ){
            console.log ("El número introducido es par")
        } else {
            console.log ("El número introducido es impar")
        }
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
printButton('U3P16', 'Unidad 3 Punto 16')

function U3P16(){
    console.log('Punto 16')
    var numero_multiplo;
    numero_multiplo = prompt("Ingrese número para saber si es múltiplo de 3");

    if (numero_multiplo == 0) {
        console.log("El número NO es múltiplo de 3")
    } else {
        if ((numero_multiplo % 3) == 0) {
            console.log("El número es múltiplo de 3")
        } else {
            console.log("El número NO es múltiplo de 3")
        }
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
printButton('U3P17', 'Unidad 3 Punto 17')

function U3P17(){
    console.log('Punto 17')
    var vocal;
    vocal=prompt("Ingrese una letra para saber si es una vocal").toLowerCase()

    if (vocal === "a" || vocal === "e" || vocal === "i" || vocal === "o" || vocal === "u") {
        console.log("El valor ingresado es una vocal")
    } else {
        console.log("El valor ingresado NO es una vocal")
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
printButton('U3P18', 'Unidad 3 Punto 18')

function U3P18(){
    console.log('Punto 18')
    const NUMEROS=parseInt(prompt('Ingrese un numero'))
    const CONJUNTO_NUMEROS= [5,10,15,20,25,30]
    var numero_elegido=0

    if(NUMEROS>=CONJUNTO_NUMEROS[0] && NUMEROS<=CONJUNTO_NUMEROS[CONJUNTO_NUMEROS.length-1]){
        console.log(`EL NUMERO ${NUMEROS} es igual o mayor que ${CONJUNTO_NUMEROS[0]}`)
        numero_elegido=NUMEROS
    }

    for (let i = 1; i <= CONJUNTO_NUMEROS.length-2; i++) {
        if(NUMEROS<=CONJUNTO_NUMEROS[i] && NUMEROS>=CONJUNTO_NUMEROS[0]){
            numero_elegido = NUMEROS;
        } else if (NUMEROS>=CONJUNTO_NUMEROS[i] && NUMEROS<=CONJUNTO_NUMEROS[CONJUNTO_NUMEROS.length-2]) {
            numero_elegido = NUMEROS;
        }
    }

    if(NUMEROS<=(CONJUNTO_NUMEROS[CONJUNTO_NUMEROS.length-1]) && NUMEROS>=CONJUNTO_NUMEROS[0]){
        console.log(`EL NUMERO ${NUMEROS} es igual o menor que ${CONJUNTO_NUMEROS[CONJUNTO_NUMEROS.length-1]}`)
        numero_elegido=NUMEROS
    }

    if(numero_elegido!==0){
        console.log(`El numero elegido "${NUMEROS}" se encuentra dentro del arreglo de números`)
        if(NUMEROS%2==0){
            console.log(`EL NUMERO ${NUMEROS} ES PAR`)
        }
    } else {
        console.log(`El numero elegido "${NUMEROS}" NO se encuentra dentro del arreglo de números`)
        if(NUMEROS%2!==0){
            console.log(`EL NUMERO ${NUMEROS} ES IMPAR`)
        }
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
printButton('U3P19', 'Unidad 3 Punto 19')

function U3P19(){
    console.log('Punto 19')
    const NUMERO1=parseInt(prompt('Ingrese el 1er numero'))
    const NUMERO2=parseInt(prompt('Ingrese el 2do numero'))
    const OPERADOR_LOGICO=prompt('Ingrese operador logico (+,-,*,/)')
    console.log(NUMERO1)
    console.log(NUMERO2)
    if(OPERADOR_LOGICO=='+') {
        console.log(`El resultado entre numero1 y numero2 es= ${NUMERO1+NUMERO2}`)
    }
    if(OPERADOR_LOGICO=='-') {
        console.log(`El resultado entre numero1 y numero2 es= ${NUMERO1-NUMERO2}`)
    }
    if(OPERADOR_LOGICO=='*') {
        console.log(`El resultado entre numero1 y numero2 es= ${NUMERO1*NUMERO2}`)
    }
    if(OPERADOR_LOGICO=='/') {
        console.log(`El resultado entre numero1 y numero2 es= ${NUMERO1/NUMERO2}`)
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
printButton('U3P20', 'Unidad 3 Punto 20')

function U3P20(){
    console.log('Punto 20')
    const TRIANGULO1=parseInt(prompt('Ingrese el primer lado para el triangulo'))
    const TRIANGULO2=parseInt(prompt('Ingrese el segundo lado para el triangulo'))
    const TRIANGULO3=parseInt(prompt('Ingrese el tercer lado para el triangulo'))

    if(TRIANGULO1==TRIANGULO2 && TRIANGULO2==TRIANGULO3) {
        console.log('El triangulo es de tipo: Equilatero')
    } else {
        if(TRIANGULO1==TRIANGULO2 || TRIANGULO1== TRIANGULO3 || TRIANGULO2==TRIANGULO3){
            console.log('El triangulo es de tipo: Isosceles')
        } else {
            console.log('El triangulo es de tipo: Escaleno')
        }
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
printButton('U3P21', 'Unidad 3 Punto 21')

function U3P21(){
    console.log('Punto 21')
    const CAT1=2000
    const CAT2=3000
    const CAT3=4000
    const HS_TRABAJADAS=parseInt(prompt('Ingrese la cantidad de horas trabajadas:'))
    const CATEGORIA=parseInt(prompt('Seleccione la categoria laboral: ' + "\n" + '1 para CATEGORIA1' + "\n" + '2 para CATEGORIA2' + "\n" + '3 para CATEGORIA3'))
    var sueldo=0
    if(CATEGORIA==1 && HS_TRABAJADAS>20){
        sueldo=CAT1+500
        console.log(`El sueldo es de U$S${sueldo} para la Categoria ${CATEGORIA}`)
        if(sueldo>4000){
            console.log(`El sueldo SUPERA los U$S4000 ---> U$S${sueldo}`)
        } else {
            console.log(`El sueldo NO SUPERA los U$S4000 ---> U$S${sueldo}`)
        }
    }
    if(CATEGORIA==2){
        sueldo=3000
        console.log(`El sueldo es de U$S${sueldo} para la Categoria ${CATEGORIA}`)
    }
    if(CATEGORIA==3 && HS_TRABAJADAS>30){
        sueldo=CAT3+1000
        console.log(`El sueldo es de U$S${sueldo} para la Categoria ${CATEGORIA}`)
        if(sueldo>4000){
            console.log(`El sueldo SUPERA los U$S4000 ---> U$S${sueldo}`)
        } else {
            console.log(`El sueldo NO SUPERA los U$S4000 ---> U$S${sueldo}`)
        }
    }
}