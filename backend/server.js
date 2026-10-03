const http = require('http');

// 1. Server Banayein
const server = http.createServer((req, res) => {
    
    // Status Code 200 (Success) aur Response Header Set Karein
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Client/Browser ko response bhejein
    res.end('Hello! Mera pehla Node.js HTTP Server chal raha hai.');
});

// 2. Server ko Port 3000 par start karein
server.listen(3000, () => {
    console.log('Server chalu ho gaya hai: http://localhost:3000');
});