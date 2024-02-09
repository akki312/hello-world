var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
  ];
function property_value(array, propert_key) {
    var arr = [], 
    index = -1,
    arrlen = array.length,
    array_items;
    while(++index < arrlen) {
        array_items = array[index];
        if (array_items.hasownproperty(propert_key)) {
            arr[arr.length] = array_items[propert_key];

        }
    }
    return arr;
}
console.log(property_value(library, 'title'));
console.log(property_value(library, 'author'));
  