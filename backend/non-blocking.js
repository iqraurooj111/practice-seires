const fs = require('fs');

console.log('1. Call Stack: Main Script Start');

// Asynchronous / Non-Blocking File Read
// Ye task Libuv Worker Pool ko handover ho jayega
fs.readFile('large-file.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('4. Event Loop & Callback Queue: Async File Read Complete');
});

// Timer Operation (Libuv timer phase)
setTimeout(() => {
    console.log('3. Event Loop: setTimeout Callback Executed');
}, 0);

console.log('2. Call Stack: Main Script End');