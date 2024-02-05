// function
function greet(name, callback) {
    console.log('hi' + ' ' + name);
    callback();
}

//callback function
function callme() {
    console.log('i am callback fucntion');
    }
    greet('peter', callme);