console.log('Unidad 4')

console.log('Punto 22')
const N1=parseInt(prompt('Ingrese el primer número:'))
const N2=parseInt(prompt('Ingrese el segundo número:'))
const N3=parseInt(prompt('Ingrese el tercer número:'))

const PROMEDIO=(N1+N2+N3)/3
console.log(PROMEDIO)
if(PROMEDIO %3 == 0){
    console.log('es multiplo de 3')
}
if(PROMEDIO %3 !==0) {
    console.log('no es multiplo de 3')
}
if (PROMEDIO %5 ==0){
    console.log('es multiplo de 5')
}
if (PROMEDIO %5 !==0){
    console.log('no es multiplo de 5')
}
if (PROMEDIO %3 ==0 && PROMEDIO %5 ==0){
    console.log('es multiplo de 3 y 5')
}
if (PROMEDIO %3 !==0 && PROMEDIO %5 !==0){
    console.log('no es mutiplo de 3 ni 5')
}
console.log('Punto 23')
const RANGO_NUMERICO=[9,14,19,24,29,34,39,44]
var eleccion=''
var conjunto_numeros=[]
var intentos=0
const NUMEROS=parseInt(prompt('Ingrese un numero'))
conjunto_numeros.push(NUMEROS)
continuar()
function continuar(){
    intentos++
    eleccion=parseInt(prompt('Ingrese otro numero...Elección: ' + intentos + "\n" + '0 para salir'))
    if(eleccion!==0){
        conjunto_numeros.push(eleccion)
    }
}

while(eleccion!==0){
    continuar()   
}
intentos=0
console.log('Rango numerico de 5 en 5: ',RANGO_NUMERICO)
console.log('Conjunto de numeros elegidos: ',conjunto_numeros)

conjunto_numeros.sort(function ordenado(a,b){return a-b})
console.log('Conjunto de numeros elegidos ORDENADOS: ',conjunto_numeros)
conjunto_numeros.forEach(losnumeros => {
    for (let i = 0; i < RANGO_NUMERICO.length; i++) {
        if(RANGO_NUMERICO[i]==losnumeros || RANGO_NUMERICO[0]==conjunto_numeros[0] || RANGO_NUMERICO[RANGO_NUMERICO.length-1]==losnumeros){
            console.log('RANGO NUMERICO: ' + i + ' - ' + RANGO_NUMERICO[i],'Mi conjunto de numeros: ' + losnumeros)
            if(losnumeros %2==0){
                console.log('El numero ' + losnumeros + ' es par')
            }
        } else if(losnumeros>=RANGO_NUMERICO[0] && losnumeros<=RANGO_NUMERICO[RANGO_NUMERICO.length-1]){
            console.log('RANGO NUMERICO: ' + i + ' - ' + RANGO_NUMERICO[i],'Mi conjunto de numeros: ' + losnumeros)
            if(losnumeros %2==0){
                console.log('El numero ' + losnumeros + ' es par')
            }
        } else if(RANGO_NUMERICO[i]>=losnumeros && losnumeros>=RANGO_NUMERICO[i]) {
            console.log('RANGO NUMERICO: ' + i + ' - ' + RANGO_NUMERICO[i],'Mi conjunto de numeros: ' + losnumeros)
        } else if(RANGO_NUMERICO[RANGO_NUMERICO.length-1]>=losnumeros && losnumeros>=RANGO_NUMERICO[0]){
            console.log('RANGO NUMERICO: ' + i + ' - ' + RANGO_NUMERICO[i],'Mi conjunto de numeros: ' + losnumeros)
        } else if(losnumeros %2!==0){
            console.log('El numero ' + losnumeros + ' es impar')
        }
    }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('Punto 24')
var contador = 0
var NUMERO1 = parseInt(prompt('Ingrese el 1er numero'))
var OPERADOR_LOGICO = prompt('Ingrese operador logico (+,-,*,/)')
var NUMERO2 = parseInt(prompt('Ingrese el 2do numero'))
var continuar = 's';
while (continuar == 's') {
    contador = contador + 1
    if (contador !== 1) {
        NUMERO1 = parseInt(prompt('Ingrese el 1er numero'))
        OPERADOR_LOGICO = prompt('Ingrese operador logico (+,-,*,/)')
        NUMERO2 = parseInt(prompt('Ingrese el 2do numero'))
    }
    if (OPERADOR_LOGICO == '+') {
        console.log(`El resultado entre la suma de numero1(${NUMERO1}) y numero2(${NUMERO2}) es= ${NUMERO1 + NUMERO2}`)
    }
    if (OPERADOR_LOGICO == '-') {
        console.log(`El resultado entre la resta de numero1(${NUMERO1}) y numero2(${NUMERO2}) es= ${NUMERO1 - NUMERO2}`)
    }
    if (OPERADOR_LOGICO == '*') {
        console.log(`El resultado entre la multiplicacion de numero1(${NUMERO1}) y numero2(${NUMERO2}) es= ${NUMERO1 * NUMERO2}`)
    }
    if (OPERADOR_LOGICO == '/') {
        console.log(`El resultado entre la division de numero1(${NUMERO1}) y numero2(${NUMERO2}) es= ${NUMERO1 / NUMERO2}`)
    }
    continuar = prompt('¿Desea realizar mas operaciones? contestar S').toLowerCase()
    NUMERO1 = ''
    NUMERO2 = ''
    OPERADOR_LOGICO = ''
    console.log('Preguntando al usuario y confirmando ' + continuar)
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('Punto 25')
var cantidad_alumnos = 0
var Nota1 = 0
var Nota2 = 0
var Nota3 = 0
var Promedio = 0
var repetir = 's'
var aprobados=0
var porcentaje_aprobados=0
var desaprobados=0
var porcentaje_desaprobados=0

alumnos()

function alumnos() {
    while (repetir == 's') {
        cantidad_alumnos++
        nota1()
        function nota1() {
            Nota1 = parseInt(prompt('Ingrese la 1era nota del Parcial (1-10): ' + 'ALUMNO: ' + cantidad_alumnos))
            if (Nota1 >= 1 && Nota1 <= 10) {
                console.log('Alumno Nª ', cantidad_alumnos)
                console.log('Primera Nota del parcial entre 1 y 10: ', Nota1)
            } else {
                console.log('Ingresaste un numero fuera del rango entre 1 y 10', Nota1)
                nota1()
            }
        }
        nota2()
        function nota2() {
            Nota2 = parseInt(prompt('Ingrese la 2da nota del Parcial (1-10): ' + 'ALUMNO: ' + cantidad_alumnos))
            if (Nota2 >= 1 && Nota2 <= 10) {
                console.log('Segunda Nota del parcial entre 1 y 10: ', Nota2)
            } else {
                console.log('Ingresaste un numero fuera del rango entre 1 y 10', Nota1)
                nota2()
            }
        }
        nota3()
        function nota3() {
            Nota3 = parseInt(prompt('Ingrese la 3era nota del Parcial (1-10): ' + 'ALUMNO: ' + cantidad_alumnos))
            if (Nota3 >= 1 && Nota3 <= 10) {
                console.log('Tercera Nota del parcial entre 1 y 10: ', Nota3)
            } else {
                console.log('Ingresaste un numero fuera del rango entre 1 y 10', Nota1)
                nota3()
            }
        }
        Promedio = Number(Nota1 + Nota2 + Nota3) / 3
        if (Promedio >= 4) {
            console.log('APROBADO')
            console.log('Promedio Final del Alumno: ' + Promedio)
            aprobados++
        } else {
            console.log('DESAPROBADO')
            console.log('Promedio Final del Alumno menos de 4: ' + Promedio)
            desaprobados++
        }
        verificaRespuesta()
        function verificaRespuesta() {
            repetir = prompt('¿Desea agregar mas alumnos? (s/n)')
            if(repetir=='s') {

            } else if (repetir=='n') {

            } else if (repetir!=='n'){
                console.log('opcion incorrecta para continuar agregando mas alumnos')
                verificaRespuesta()
            }
        }
    }
}

porcentaje_aprobados=Math.round((aprobados*100)/cantidad_alumnos)
console.log('El porcentaje de alumnos aprobados es de ' + porcentaje_aprobados + '% de un total de ' + cantidad_alumnos + ' alumnos (' + aprobados + ' Aprobados.)')
porcentaje_desaprobados=Math.round((desaprobados*100)/cantidad_alumnos)
console.log('El porcentaje de alumnos desaprobados es de ' + porcentaje_desaprobados + '% de un total de ' + cantidad_alumnos + ' alumnos (' + desaprobados + ' Desaprobados.)')

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('Punto 26')
var eleccion=''
var conjunto_numeros=[]
var intentos=0
const NUMERO_FAVORITO=Number(prompt('Ingrese un numero que le guste'))
conjunto_numeros.push(NUMERO_FAVORITO)
continuar()
function continuar(){
    intentos++
    eleccion=Number(prompt('Ingrese otro numero a su gusto...Elección: ' + intentos + "\n" + '0 para salir'))
    if(eleccion!==0){
        conjunto_numeros.push(eleccion)
    }
}

while(eleccion!==0){
    continuar()   
}
console.log('Los números elegidos son: ' + conjunto_numeros)
var resultado=0
var valor_minimo=0
var valor_maximo=0
var conjunto_numeros_ordenados=[]
for (let i = 0; i <= conjunto_numeros.length-1; i++) {
    conjunto_numeros_ordenados.push(conjunto_numeros[i])
    resultado=resultado+conjunto_numeros[i]
    conjunto_numeros_ordenados.sort(function ordenarNumeros(a,b){return a-b})
}
console.log('El resultado de los valores ingresados es de: ' + Math.round(resultado) + ' redondeado y ' + resultado + ' resultado original.')
console.log('Los números elegidos ordenados de menor a mayor son: ' + conjunto_numeros_ordenados)
console.log('El número de menor valor es el: ' + conjunto_numeros_ordenados[0])
console.log('El número de mayor valor es el: ' + conjunto_numeros_ordenados[conjunto_numeros_ordenados.length-1])

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('Punto 27')
var PERSONA = ''
var sexo = ''
var EDAD = 0
var altura = 0
var Altura=0
var humano = 0
var encuesta = 's'
var MUJERES_MAYORES_25=[]
var HOMBRES_MENORES_18=[]
var MUJERES_EDAD=[]
var HOMBRES_ALTURA=[]
var EDADES=[]
var EDADES_ORDENADA=[]
var ALTURA=[]
var ALTURA_ORDENADA=[]
var alturaPromedio=0
var promedio_edad_mujeres=0

while (encuesta == 's') {
    validarPersona()
    function validarPersona() {
        humano++
        PERSONA = prompt('Ingrese su sexo: (H - Hombre o M - Mujer)')
        if (PERSONA == 'h') {
            sexo = 'Hombre'
        } else if (PERSONA == 'm') {
            sexo = 'Mujer'
        } else if (PERSONA !== 'h' && PERSONA !== 'm') {
            console.log('opcion mal ingresada, seleccionar "h" o "m"')
            validarPersona()
        }
    }
    console.log('Persona: ' + sexo)
    validarEdad()
    function validarEdad() {
        EDAD = parseInt(prompt('Ingrese su edad: '))
        if (EDAD <= 0) {
            console.log('opcion invalida, debe proporcionar una edad en años de tipo entero')
            validarEdad()
        }
        if(PERSONA=='m' && EDAD>25){
            MUJERES_MAYORES_25.push(EDAD)
        }
        if(PERSONA=='h' && EDAD<18){
            HOMBRES_MENORES_18.push(EDAD)
        }
        if(PERSONA=='m'){
            MUJERES_EDAD.push(EDAD)
        } else if(isNaN(EDAD)){
            console.log('Valor "NaN" para edad, por favor ingresar una edad válida')
            validarEdad()
        }
        EDADES.push(EDAD)
    }
    console.log('Edad: ' + EDAD)
    validarAltura()
    function validarAltura(){
        altura = Number(prompt('Ingrese su altura: (en centimetros)'))
        if(altura>=250){
            console.log(altura + 'cms... ' + 'Daaaaaaaaleeeee... ¿vistes a Pie Grande?')
            validarAltura()
        }
        if(altura<=0){
            console.log('La altura no puede ser igual o menor a cero.')
            validarAltura()
        }
        if(PERSONA=='h'){
            HOMBRES_ALTURA.push(altura)
        }
        ALTURA.push(altura)
    }
    console.log('La altura de la Persona: ' + humano + ' es de ' + altura + ' cms.')
    
    validarEncuesta()
    function validarEncuesta() {
        encuesta = prompt('¿Desea continuar con la encuesta? (s/n)')
        if (encuesta == 's') {

        } else if (encuesta == 'n') {

        } else if (encuesta !== 's' || encuesta !== 'n') {
            console.log('opcion mal ingresada (tipeaste "' + encuesta + '"), por favor escriba "s" o "n"...')
            validarEncuesta()
        }
    }
}
console.log('El porcentaje de mujeres mayores a 25 años es de: ' + Math.round((MUJERES_MAYORES_25.length*100/humano)) + '%')
console.log('El porcentaje de hombres menores a 18 años es de: ' + Math.round((HOMBRES_MENORES_18.length*100/humano)) + '%')

for (let m = 0; m <= MUJERES_EDAD.length-1; m++) {
    promedio_edad_mujeres = promedio_edad_mujeres+MUJERES_EDAD[m];
}
promedio_edad_mujeres=promedio_edad_mujeres/MUJERES_EDAD.length
console.log('El promedio de edad de las mujeres es de: ' + Math.round(promedio_edad_mujeres) + ' años.')
ALTURA_ORDENADA=ALTURA
console.log('Altura... ',ALTURA)
ALTURA_ORDENADA.sort(function(a,b){return a-b})
console.log('Altura ordenada... ',ALTURA_ORDENADA)
for (let i = 0; i <= ALTURA_ORDENADA.length-1; i++) {
    Altura=Altura+ALTURA_ORDENADA[i];
}
alturaPromedio=Math.round(Altura/ALTURA_ORDENADA.length)
console.log('El promedio de altura de los hombres es de: ' + alturaPromedio + ' cms.')
EDADES_ORDENADA=EDADES
EDADES_ORDENADA.sort(function(a,b){return a-b})
console.log('La menor edad ingresada es: ' + EDADES_ORDENADA[0] + ' años.')
console.log('La mayor altura ingresada es: ' + ALTURA_ORDENADA[ALTURA_ORDENADA.length-1] + ' cms.')