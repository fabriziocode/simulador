alert ("Bienvenido, ingresa los siguientes datos para saber si tienes que declarar renta.")

let cedula = parseInt(prompt("Ingresa el número de cédula:"))
let salario = parseInt(prompt("Ingresa tu salario base mensual"))
let totalComisiones = 0
let pregComisiones = parseInt(prompt("Recibiste comisiones o dineros extras a tu salario base mensual: 1.Si  -  2.No"))

while (pregComisiones === 1) {
    let ingrComisiones = parseInt(prompt("Desea ingresar el valor de las comisiones o dineros extras de manera: 1.Mensual  -  2.Anual"))
        if (ingrComisiones === 1) {
            let comiEne = parseInt(prompt("Ingrese el valor de la comisión o dinero extra del mes de enero:"))
            let comiFeb = parseInt(prompt("Ingrese el valor de la comisión o dinero extra del mes de febrero:"))
            let comiMar = parseInt(prompt("Ingrese el valor de la comisión o dinero extra del mes de marzo:"))
            let comiAbr = parseInt(prompt("Ingrese el valor de la comisión o dinero extra del mes de abril:"))
            let comiMay = parseInt(prompt("Ingrese el valor de la comisión o dinero extra del mes de mayo:"))
            let comiJun = parseInt(prompt("Ingrese el valor de la comisión o dinero extra del mes de junio:"))
            let comiJul = parseInt(prompt("Ingrese el valor de la comisión o dinero extra del mes de julio:"))
            let comiAgo = parseInt(prompt("Ingrese el valor de la comisión o dinero extra del mes de agosto:"))
            let comiSep = parseInt(prompt("Ingrese el valor de la comisión o dinero extra del mes de septiembre:"))
            let comiOct = parseInt(prompt("Ingrese el valor de la comisión o dinero extra del mes de octubre:"))
            let comiNov = parseInt(prompt("Ingrese el valor de la comisión o dinero extra del mes de noviembre:"))
            let comiDic = parseInt(prompt("Ingrese el valor de la comisión o dinero extra del mes de diciembre:"))
            totalComisiones = comiEne+comiFeb+comiMar+comiAbr+comiMay+comiJun+comiJul+comiAgo+comiSep+comiOct+comiNov+comiDic
            pregComisiones = 2
         } else if (ingrComisiones === 2) {
            let comiAnual = parseInt(prompt("Ingrese el valor total de las comisiones o dineros extras del año:"))
            totalComisiones = totalComisiones + comiAnual
            pregComisiones = 2
        } else {
            let ingrComisiones = parseInt(prompt("Ingrese una opción correcta: Desea ingresar el valor de las comisiones o dineros extras de manera: 1.Mensual  -  2.Anual"))
            continue
        }
}

alert ("EL valor total de sus comisiones o dineros extras es: $" +(totalComisiones))

function calcularSalarioTotal (valor){
    valor=valor * 12
    return valor
}

let sumaSalario = calcularSalarioTotal(salario)
alert ("El total del salario recibido es: $" +sumaSalario)

function calcularTotalDevengado (valor1, valor2) {
    total=valor1 + valor2
    return total
}

let totalDevengado = calcularTotalDevengado(sumaSalario, totalComisiones)
alert ("El total devengado en el año fue $" +totalDevengado)

function identificarRenta (valor){
    let declararRenta = "None"
    if(valor<=24000000){
        declararRenta = "No"
    } else {
        declararRenta = "Si"
    }
    valor=declararRenta
    return valor
}

let avisoDeclaRenta = identificarRenta(totalDevengado)
alert (avisoDeclaRenta+" tienes que declarar renta.")
