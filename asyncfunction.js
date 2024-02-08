// a promise
let promise = new promise(function (resolve, reject) {
    setTimeout(function (){
    resolve('promise resolved')}, 4000);
    });
    // async function
    async function asyncfunc() {
        // wait until the promise resolves
        let result = await promise;
        console.log(result);
        console.log('hello');
    }
    // calling the async function
    asyncfunc();