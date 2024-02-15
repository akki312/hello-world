const fs = require('fs');
fs.readFile('nodejs1.js', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});