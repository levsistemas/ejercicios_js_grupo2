printButton('U2P9', 'Unidad 2 Punto 9')

function U2P9(){
    console.log('UNIDAD 2')

    console.log('Punto 9')
    const USER_NOMBRE=prompt('Ingrese su nombre')
    const USER_APELLIDO=prompt('Ingrese su apellido')
    const USER_GENERO=prompt('Ingrese su genero M o F').toLowerCase()
    if(USUARIO_GENERO=='m'){
        var BIENVENIDO='Bienvenido ' + USER_NOMBRE + ' ' + USER_APELLIDO
    } else {
        var BIENVENIDO='Bienvenida ' + USER_NOMBRE + ' ' + USER_APELLIDO
    }
    console.log(BIENVENIDO)
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
printButton('U2P10', 'Unidad 2 Punto 10')

function U2P10(){
    console.log('Punto 10')
    const DIAMETRO=parseFloat(prompt('Ingrese valor para el diametro de un circulo'))
    const RADIO_PERIMETRAL=13
    const CIRCULO_PERIMETRAL=parseFloat(PI*DIAMETRO)
    const AREA_PERIMETRAL=(PI*(RADIO_PERIMETRAL**2))
    console.log('El perimetro para el circulo equivale a: ' + CIRCULO_PERIMETRAL + ' siendo la cuenta ' + PI + ' * ' + DIAMETRO)
    console.log('El área para el circulo equivale a: ' + AREA_PERIMETRAL + ' siendo la operacion ' + PI + ' (' + RADIO_PERIMETRAL + '^2)')
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
printButton('U2P11', 'Unidad 2 Punto 11')

function U2P11(){
    console.log('Punto 11')
    const NUMERO1=parseInt(prompt('Ingrese su primer número'))
    const NUMERO2=parseInt(prompt('Ingrese su segundo número'))
    const NUMERO3=parseInt(prompt('Ingrese su tercer número'))
    const NUMERO4=parseInt(prompt('Ingrese su cuarto número'))
    const PROMEDIO_N4=(NUMERO1+NUMERO2+NUMERO3+NUMERO4)/4
    console.log('La suma de los 4 numeros: N1=' + NUMERO1 + ' N2=' + NUMERO2 + ' N3=' + NUMERO3 + ' N4=' + NUMERO4 + ' es igual a= ' + (NUMERO1+NUMERO2+NUMERO3+NUMERO4))
    console.log('Su promedio es igual a= ' + PROMEDIO_N4)
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
printButton('U2P12', 'Unidad 2 Punto 12')

function U2P12(){
    console.log('Punto 12')
    const HORAS=parseInt(prompt('Ingrese el valor de la hora:'))
    const HORAS_DEL_MES=parseInt(prompt('Ingrese la cantidad de hs trabajadas en el mes:'))
    const RESULTADO=(HORAS*HORAS_DEL_MES)
    console.log('El sueldo mensual del empleado es igual a $' + RESULTADO)
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
printButton('U2P13', 'Unidad 2 Punto 13')

function U2P13(){
    console.log('Punto 13')
    const HORAS_EMPLEADO=parseInt(prompt('Ingrese el valor de la hora:'))
    const HORAS_MENSUALES=parseInt(prompt('Ingrese la cantidad de hs trabajadas en el mes:'))
    const ANIO_ANTIGUEDAD=parseInt(prompt('Años de antiguedad en la empresa:'))
    const SUELDO_BASE=HORAS_EMPLEADO*HORAS_MENSUALES
    const BONO_MENSUAL=(SUELDO_BASE*0.15)*ANIO_ANTIGUEDAD
    const SUELDO_MENSUAL_TOTAL=SUELDO_BASE+BONO_MENSUAL
    console.log('El valor de la hora para el empleado es de: ' + HORAS_EMPLEADO)
    console.log('La cantidad de horas trabajadas en el mes es de: ' + HORAS_MENSUALES)
    console.log('Los años de antiguedad correspondiente es de: ' + ANIO_ANTIGUEDAD)
    console.log('El bono MENSUAL correspondiente para el empleado con ' + ANIO_ANTIGUEDAD + ' equivale a: ' + SUELDO_MENSUAL_TOTAL)
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
printButton('U2P14', 'Unidad 2 Punto 14')

function U2P14(){
    console.log('Punto 14')
    const HORAS_EMPLEADO_SEGURO=parseInt(prompt('Ingrese el valor de la hora:'))
    const HORAS_MENSUALES_SEGURO=parseInt(prompt('Ingrese la cantidad de hs trabajadas en el mes:'))
    const ANIO_ANTIGUEDAD_SEGURO=parseInt(prompt('Años de antiguedad en la empresa:'))
    const CANT_SEGUROS_VENDIDOS=parseInt(prompt('Cantidad de seguros vendidos: '))
    const SEGURO_MAS_COSTOSO=parseInt(prompt('Valor del seguro mas costoso: '))
    const SUELDO_BASE_SEGURO=HORAS_EMPLEADO_SEGURO*HORAS_MENSUALES_SEGURO
    const BONO_MAS_CARO=(SEGURO_MAS_COSTOSO*0.5)+SUELDO_BASE_SEGURO
    const BONO_25=(SUELDO_BASE_SEGURO*0.25)*CANT_SEGUROS_VENDIDOS
    const BONO_15=(SUELDO_BASE_SEGURO*0.15)*ANIO_ANTIGUEDAD_SEGURO
    const SUELDO_MENSUAL_TOTAL_DEL_SEGURO=BONO_15+BONO_25+BONO_MAS_CARO
    const HORA_PROMEDIO_SEGURO=SUELDO_MENSUAL_TOTAL_DEL_SEGURO/HORAS_MENSUALES_SEGURO
    console.log('El sueldo final del empleado es de: ' + SUELDO_MENSUAL_TOTAL_DEL_SEGURO)
    console.log('El valor promedio de la hora del empleado es de: ' + HORA_PROMEDIO_SEGURO)
}