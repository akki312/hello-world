let a = "hello";
function greet() {
// local variable
let b = 'world';
console.log(a + ' ' + b);
if(b == 'world') {
    //block-scoped variable
    let c = 'hello';
    console.log(a + ' ' + b + ' ' + c);
}
// variable c cannot be accessed here
console.log(a + ' ' + b + ' ' + c);
}
greet();