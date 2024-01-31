const myNumberas = [4, 1, -20, -7, 5, 9, -6];
const postNumbers = removeneg(myNumbers, (x) => x >= 0);
document.getelementbyid("demo").innerhtml = postNumbers;
function removeNeg(numbers,callback) {
const myArray = [];
for (const x of numbers(x)) {
if(callback(x)){
myarray.push(x);
}
}
return myArray;
}