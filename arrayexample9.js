function differenceof2arrays(array1, array2) {
    var temp = [];
    array1 = array1.tostring().split(',').map(Number);
    array2 = array2.tostring().split(',').map(Number);
    for (var i in array1) {
        if(array1.indexof(array2[i]) === -1)
        temp.push(array2[i]);
    }
    return temp.sort((a, b) => a - b);
}
console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
console.log(differenceOf2Arrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));