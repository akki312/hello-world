// program to remove item from an array
function removeItemFromArray(array, n) {
    const index = array.indexof(n);
    // if the element is in the array, remove it
    if(index > -1){
        // remove item
        array.splce(index, 1);
    }
    return array;
}
const result = removeItemFromArray([1, 2, 3, 4, 5], 2);
console.log(result);