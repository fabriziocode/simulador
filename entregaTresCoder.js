alert ("Bienvenido, ingresa los siguientes datos para saber si tienes que declarar renta.")

const nombre = prompt("Ingrese su nombre:")
const cedula = prompt("Ingresa tu número de cédula:"); /* NO se pide este dato como parseInt(prompt()) para que el metodo de arreglo
de la siguiente linea funcione bien, y por consecuencia se agrega en otra linea la converción de este prompt en parseInt */
const sustraUltiDigi = (cedula.substring(cedula.length - 2))
console.log(sustraUltiDigi)
const ultiDigi = parseInt(sustraUltiDigi)
const salario = parseInt(prompt("Ingresa tu salario base mensual"))
let totalComisiones = 0
let pregComisiones = parseInt(prompt("Recibiste comisiones o dineros extras a tu salario base mensual: 1.Si  -  2.No"))
const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]
let i = 0

//---------------------------------------- Array para validar captar información de valores mensual

let ingMensual = []

while (pregComisiones === 1) {
    let ingrComisiones = parseInt(prompt("Desea ingresar el valor de las comisiones o dineros extras de manera: 1.Mensual  -  2.Anual"))
        if (ingrComisiones === 1) {
            while(i<=11){
                let ingrComi = parseInt(prompt("Ingrese el valor de la comisión o dinero extra del mes de " +meses[i]))
                ingMensual.push(ingrComi)
                console.log("El ingreso del mes de " +meses[i], "fue de " +ingrComi)
                totalComisiones = totalComisiones+ingrComi
                i++
            }
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

console.log(ingMensual)

//---------------------------------------- Construcción de objeto

class Fechas {
    constructor(mes,dia,digito1,digito2){
        this.mes=mes
        this.dia=dia
        this.digito1=digito1
        this.digito2=digito2
    }
}


const fechasDeclarar = [new Fechas("agosto",09,01,02),new Fechas("agosto",10,03,04),new Fechas("agosto",11,05,06),new Fechas("agosto",12,07,08),new Fechas("agosto",16,09,10),
                        new Fechas("agosto",17,11,12),new Fechas("agosto",18,13,14),new Fechas("agosto",19,15,16),new Fechas("agosto",22,17,18), new Fechas("agosto",23,19,20),
                        new Fechas("agosto",24,21,22),new Fechas("agosto",25,23,24),new Fechas("agosto",26,25,26), new Fechas("agosto",29,27,28),new Fechas("agosto",30,29,30),
                        new Fechas("agosto",31,31,32),new Fechas("septiembre",1,33,34),new Fechas("septiembre",2,35,36),new Fechas("septiembre",5,37,38),new Fechas("septiembre",6,39,40),
                        new Fechas("septiembre",7,41,42),new Fechas("septiembre",8,43,44),new Fechas("septiembre",9,45,46), new Fechas("septiembre",12,47,48),new Fechas("septiembre",13,49,50),
                        new Fechas("septiembre",14,51,52),new Fechas("septiembre",15,53,54),new Fechas("septiembre",16,55,56),new Fechas("septiembre",19,57,58),new Fechas("septiembre",20,59,60),
                        new Fechas("septiembre",21,61,62),new Fechas("septiembre",22,63,64),new Fechas("septiembre",23,65,66),
                        new Fechas("septiembre",26,67,68),new Fechas("septiembre",27,69,70),new Fechas("septiembre",28,71,72),new Fechas("septiembre",29,73,74),new Fechas("septiembre",30,75,76),
                        new Fechas("octubre",3,77,78),new Fechas("octubre",4,79,80),new Fechas("octubre",5,81,82),new Fechas("octubre",6,83,84),new Fechas("octubre",7,85,86),
                        new Fechas("octubre",10,87,88),new Fechas("octubre",11,89,90),new Fechas("octubre",12,91,92),new Fechas("octubre",13,93,94),new Fechas("octubre",14,95,96),
                        new Fechas("octubre",18,97,98), new Fechas("octubre",19,99,00)
                    ]
console.log(fechasDeclarar)

//---------------------------------------- Metodo de busqueda y filtrado

const buscarObj = fechasDeclarar.filter(dig => dig.digito1 === ultiDigi || dig.digito2 === ultiDigi)
const convObj = buscarObj.find(day => day.dia)
console.log(convObj)
const buscarDia = convObj.dia
const buscarMes = convObj.mes
console.log(buscarDia)

while(avisoDeclaRenta === "Si") {
    alert("Su cédula termina en " +ultiDigi+ " y la fecha máxima para presentar su declaración de renta es el día " +buscarDia+ " del mes de " +buscarMes+".")
    break
}

alert("Gracias " +nombre+ " por utilizar nuestros simulador")







