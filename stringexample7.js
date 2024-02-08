const number = 5;
try {
    // user-defined throw statement
    throw new error('this is the throw');
}
catch(error) {
    console.log('an error caught');
    if( number + 8 > 10) {
        // statements to handle exceptions
        console.log('error message: ' + error);
        console.log('error resolved');
    }
    else {
        // cannot handle the exception
        // rethrow the exception
        throw new error('the value is low');
    }
}