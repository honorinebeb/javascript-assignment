function displayPattern(rows, cols) {
    for (let i = 0; i < rows; i++) {
        let rowPattern = "";
        for (let j = 0; j < cols; j++) {
            if (j < rows - i) {
                rowPattern += "1 ";
            } else {
                rowPattern += "0 ";
            }
        }
        console.log(rowPattern.trim());
    }
}
displayPattern(5, 5);