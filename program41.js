// callback function example
function greet(name, myfucntion){
    console.log('hello world');
    myfucntion(name);
}
function sayName(name) {
    console.log('hello' + ' ' + name);
    }
    setTimeout(greet, 2000, 'john', sayName);
    