console.log('Unidad 1')

console.log('Punto 1')
const NOMBRE1='Leandro'
const APELLIDO1='Vega'
const NOMBRE2='Agustina'
const APELLIDO2='Florines'
const NOMBRE3='Nazareno'
const APELLIDO3='Damore'
console.log(`Mi nombre completo es ${NOMBRE1} ${APELLIDO1}`)
console.log(`Mi nombre completo es ${NOMBRE2} ${APELLIDO2}`)
console.log(`Mi nombre completo es ${NOMBRE3} ${APELLIDO3}`)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('Punto 2')
var NOTA1=8
var NOTA2=6
var NOTA3=5
const PROMEDIO=parseFloat(NOTA1+NOTA2+NOTA3)/3
console.log('El promedio de NOTA1 ' + NOTA1 + ' ' + ', NOTA2 ' + NOTA2 + ' y NOTA3 ' + NOTA3 + ' equivalente a ' + (NOTA1+NOTA2+NOTA3) + ' es igual a: ' + PROMEDIO)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('Punto 3')
var LADO1=60
var LADO2=60
var LADO3=60
const PERIMETRO=LADO1+LADO2+LADO3
console.log('La suma de su LADO1 ' + LADO1 + ' mas su LADO2 ' + LADO2 + ' mas su LADO3 ' + LADO3 + ' da como resultado de perimetro ' + PERIMETRO)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('Punto 4')
const CUADRADO_LADO_1=20
const CUADRADO_LADO_2=20
const CUADRADO_LADO_3=20
const CUADRADO_LADO_4=20
const PERIMETRO_CUADRADO=CUADRADO_LADO_1+CUADRADO_LADO_2+CUADRADO_LADO_3+CUADRADO_LADO_4
const AREA_CUADRADO=CUADRADO_LADO_1*CUADRADO_LADO_2
console.log('La suma de sus lados: ' + 'LADO 1= ' + CUADRADO_LADO_1 + ' LADO 2= ' + CUADRADO_LADO_2 + ' LADO 3= ' + CUADRADO_LADO_3 + ' LADO 4= ' + CUADRADO_LADO_4 + ' es igual a ' + (CUADRADO_LADO_1+CUADRADO_LADO_2+CUADRADO_LADO_3+CUADRADO_LADO_4) + ' o sea su perimetro')
console.log('Su área es igual a ' + CUADRADO_LADO_1 + ' * ' + CUADRADO_LADO_2 + ' como resultado= ' + AREA_CUADRADO)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('Punto 5')
const RECTANGULO_LADO_1=40
const RECTANGULO_LADO_2=60
const RECTANGULO_LADO_3=40
const RECTANGULO_LADO_4=60
const PERIMETRO_RECTANGULO=RECTANGULO_LADO_1+RECTANGULO_LADO_2+RECTANGULO_LADO_3+RECTANGULO_LADO_4
const AREA_RECTANGULO=RECTANGULO_LADO_1*RECTANGULO_LADO_2
console.log('La suma de sus lados: ' + 'LADO 1= ' + RECTANGULO_LADO_1 + ' LADO 2= ' + RECTANGULO_LADO_2 + ' LADO 3= ' + RECTANGULO_LADO_3 + ' LADO 4= ' + RECTANGULO_LADO_4 + ' es igual a ' + (RECTANGULO_LADO_1+RECTANGULO_LADO_2+RECTANGULO_LADO_3+RECTANGULO_LADO_4) + ' o sea su perimetro')
console.log('Su área es igual a ' + RECTANGULO_LADO_1 + ' * ' + RECTANGULO_LADO_2 + ' como resultado= ' + AREA_RECTANGULO)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('Punto 6')
const VALOR1=10
const VALOR2=4
const DIVISION=(VALOR1/VALOR2)
const ENTERO=parseInt(DIVISION)
console.log('La division entre: ' + 'Valor1= ' + VALOR1 + ' y Valor2= ' + VALOR2 + ' es igual a= ' + DIVISION + ' y su entero es= ' + ENTERO)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('Punto 7')
const USUARIO_NOMBRE=prompt('Ingrese su nombre')
const USUARIO_APELLIDO=prompt('Ingrese su apellido')
const USUARIO_GENERO=prompt('Ingrese su genero M o F').toLowerCase()
if(USUARIO_GENERO=='m'){
    var BIENVENIDO='Bienvenido ' + USUARIO_NOMBRE + ' ' + USUARIO_APELLIDO
} else {
    var BIENVENIDO='Bienvenida ' + USUARIO_NOMBRE + ' ' + USUARIO_APELLIDO
}
console.log(BIENVENIDO)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('Punto 8')
const PI=3.14
const RADIO=10
const PERIMETRO_CIRCULO=(2*PI*RADIO)
const AREA_CIRCULO=(PI*RADIO**2)
console.log('El perimetro para el circulo es de: ' + PERIMETRO_CIRCULO)
console.log('El área para el circulo es de: ' + AREA_CIRCULO)