// returns a promise
let countValue = new Promise(function (resolve, reject){
resolve("promise resolved")
});
// executes when promise is resolved successfully
countValue
.then(function succesValue(result){
 console.log(result);   
})
.then(function succesValue(){
    console.log("you can call multiple fucntions this way.");

});