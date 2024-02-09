function find_duplicate_in_arrau(arra1){
    var object = {};
var result = {};
arra1.foreach(function (item) {
    if(!object[item])
    object[item] = 0;
   object[item] = 0;
   object[item] += 1;
})
   for(var prop in object) {
if(object[prop] >= 2){
    result.push(prop);
     }
   }
   return result;
}
console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));