// program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {

 
    const capitalized = str.replace(/^./, str[0].toUpperCase());

    return capitalized;
}


const string = prompt('Enter a string: ');

const result = capitalizeFirstLetter(string);

console.log(result);