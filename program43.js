const { compileFunction } = require("vm");

let countValue = new Promise(function (resolve, reject) {
    reject('promise rejected');
});
countValue.then(
    function succesValue(result){

    console.log(result)
    },
)
.catch(
    function errorValue(result) {
        console.log(result);
    }
);
