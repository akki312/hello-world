const fs = require("fs");
const information = "\ngeeksforgeeks is a computer science entrance.";
fs.appendfilesync('sample.txt', information, 'utf8');
console.log("data is attached tp record effectivelu.");
information = fs.readfilesync('sample.txt');
console.log("data in the record subsequent to adding is - \n" + data .tostring());