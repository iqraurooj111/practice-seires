const fs = require('fs');
console.log('Blocking code is running...');

const fileData = fs.readFileSync('example.txt', 'utf8');
 
console.log('--- Step 3: File Content Read Ho Gaya ---');