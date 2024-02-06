function printBox(width, height) {
      let border = "*".repeat(width);
    console.log(border);
 for (let i = 0; i < height - 2; i++) {
        let middle = "*" + " ".repeat(width - 2) + "*";
        console.log(middle);
        }
   console.log(border);
}
printBox(20, 5);

output:
********************
*                  *
*                  *
*                  *
********************
