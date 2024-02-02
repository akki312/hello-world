

let promise = new promise(function(resolve, reject){
setTimeout(function () {
    resolve('promise resolved')}, 4000
)
});
async function asyncFunc() {
    let result = await promise;
    console.log(result);
    console.log('hello');
}
asyncFunc();