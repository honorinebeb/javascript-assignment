
function convertToUpperCase(arr) {
    var uppercasedArray = [];

    for (var i = 0; i < arr.length; i++) {
        uppercasedArray.push(arr[i].toUpperCase());
    }

    return uppercasedArray;
}


console.log(convertToUpperCase(["apple", "banana", "cherry", "date"]));