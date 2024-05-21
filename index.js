import {suma, resta} from  './funciones.js'
const resultadoSuma = suma(8,1)
const resultadoResta = resta(5,1)

console.log(`El Resultado de la suma es ${resultadoSuma}` )
console.log(`El Resultado de la resta es ${resultadoResta}` )


/*
const fs = require('fs')
const formatFecha = require('./funciones')

const hoy = new Date()
const formateo = formatFecha(hoy)

fs.writeFileSync('fecha.text', `La fecha de hoy es ${formateo}`)

console.log(`La fecha de hoy es ${formateo}`)
*/
/*
const persona = require('./funciones')
const persona1 = new persona('Julio' , 26)
persona1.saludo()
*/

/*
const (agregar, restar )= require('/funciones')

const resultado = agregar(5,5)
console.log(`El resultado es ${resultado}`)
*/