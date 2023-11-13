function displayPattern(rows, columns){
    for (let i = 0; i<rows; i++){
        let row = "";
        for (let k = 0; k<columns; k++){
            row += "* "; 
        }
        console.log(row);
    }
}
displayPattern(4,5);