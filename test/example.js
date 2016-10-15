var test = require('npm-babel-transpiler-example')

let discount = 10
let value = 2500
let result = test(discount, value)

console.log(`ha aplicado un descuento del ${discount}% sobre ${value}, el resultado final es ${result}`)
