const printHeader = require('./stars.js')

let args = process.argv.slice(2)
let [stars, message] = args

printHeader(...args)

// Example 1: node index.js
// Example 2: node index.js 15 hola