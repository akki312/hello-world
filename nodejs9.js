const http = require('http');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    res.end('hello, world!\n');

});

const port = process.env.port || 2080;
server.listen(port, () => {
    console.log(`server running at http://localhost:${port}/`);

});