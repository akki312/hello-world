// Firstly require a file-system module. 
const fs = require('fs'); 

// data container. 
let dataBufferContainer = ''; 

// read the use of fs.readFileSync method. 
dataBufferContainer = fs.readFileSync('file.js'); 

// convert buffer data to string. 
let data = dataBufferContainer.toString(); 

console.log(data);
