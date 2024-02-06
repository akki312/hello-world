//*q1//
let n= 5;
let string = " ";
let count = 1;
for (i = 1;i <= n; i++){
    
    for (j = 1;j <= i; j++){
        string += count;
        count ++;
}
string +="\n";
}
    console.log(string);