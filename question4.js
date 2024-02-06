function printPattern() {
    let rows = [8, 6, 4, 1]; 
    for (let i = 0; i < rows.length; i++) {
        let line = "";
        for (let j = 0; j < rows[i]; j++) {
            line += "*";
        }
        console.log(line);
    }
}

printPattern();
