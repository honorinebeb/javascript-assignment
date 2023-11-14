function displayPattern(rows) {
    for (let i = 0; i < rows; i++) {
        let rowPattern = "";
        for (let j = 0; j < rows; j++) {
            if (j === rows - i - 1) {
                rowPattern += "1 ";
            } else {
                rowPattern += "  "; // two spaces for formatting
            }
        }
        console.log(rowPattern.trim());
    }
}

// Call the function with the desired number of rows
displayPattern(4);