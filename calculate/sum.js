function calcSum(a, b) {
  return a + b
}

var x = 'CommonJS'

module.exports = { calcSum } //commonJS module format

// we can't access variables, functions and methods of one module in another module
// just by using require(./sum) in the entry point file
// we need to use module.export to access the variables, functions and methods of one module in another module
