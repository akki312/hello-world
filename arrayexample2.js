var array_clone = function(arra1) {
    return arra1.slice(0);
};
console.log(array_clone([1, 2, 4, 0]));
console.log(array_clone([1, 2, [4, 0]]));