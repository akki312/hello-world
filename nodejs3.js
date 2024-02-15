const fs = require('fs');
const data = 'hello, nodejs1.js!';
fs.writeFile('nodejs1.js', data, (err) => {
    if(err) {
        console.error(err);
        return;
    }

    console.log('data written to file successfully');

});