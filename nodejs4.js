const http = require('http');
const options = {
    hostname: 'www.example.com',
    port: 80,
    path: '/',
    method: 'get'
};
const req = http.request(options, (res) => {
    console.log(`status code: ${res.statuscpde}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`body: ${chunk}`);
    });
});