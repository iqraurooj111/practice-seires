// Component import kar rahe hain (relative path './' lagana zaroori hai)
const calculator = require('./calculator');

const sum = calculator.add(10, 5);
const product = calculator.multiply(4, 3);

console.log('--- CommonJS Output ---');
console.log('Sum:', sum);         // Output: 15
console.log('Product:', product); // Output: 12