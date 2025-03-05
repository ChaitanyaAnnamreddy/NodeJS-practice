var x = 'Hello World!'
var y = 10

module.exports = { x, y }

// (function (module,require) {
//          all the code in the xyz module will be wrapped into a function(IIFE)
//          (IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESION),
//          that is why we can't use the variables, functions and methods of the xyz module outside of the xyz.js without IIFE and require function
// })(module.exports, require)
