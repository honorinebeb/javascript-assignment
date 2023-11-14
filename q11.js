function displayPattern(rows) {
    for (let i = 0; i < rows; i++) {
        let rowPattern = "";
        for (let j = 0; j < rows - i; j++) {
            rowPattern += "1 ";
        }
        console.log(rowPattern.trim());
    }
}

// Call the function with thed number of rows
displayPattern(5);