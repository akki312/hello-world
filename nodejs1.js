const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;
const server = http.createServer((req, res) => {
    res.statuscode = 200;
    res.setHeader('content-type', 'text/plain');
    res.end('hello world!\n');
});
server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);

});