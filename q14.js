function displayPattern(rows) {
    for (let i = 0; i < rows; i++) {
        let rowPattern = "";
        for (let j = rows; j >=0; j--) {
            if (i === j) {
                rowPattern += "1 ";
            } else {
                rowPattern += "  "; // two spaces for formatting
            }
        }
        console.log(rowPattern);
    }
}


displayPattern(5);