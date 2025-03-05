var { x, y } = require('./xyz') //calling xyz module in this entry point file

// import { x, calcMul } from './multiply.js'
// var { calcSum, x } = require('./calculate/sum') // here we will get an object with calcSum and x. we can also destructure it
// var { calcMul, y } = require('./calculate/multiplyCJS')

const data = require('./data.json')
var { calcSum, calcMul } = require('./calculate')

console.log('sum:', calcSum(10, 20)) // from sum.js module
console.log('mul:', calcMul(10, 20))
console.log('x:', x)
console.log('y:', y)

// console.log(x) // from sum.js module
// console.log(y) // from multiplyCJS.js module
console.log('data:', data)
