function printPattern(rows, cols) {
    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let j = 0; j < cols; j++) {
            row += 'a&';
        }
        console.log(row);
    }
}


printPattern(3, 4);
