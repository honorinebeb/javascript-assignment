function squareArrayElements(arr) {
    var squaredArray = [];

    for (var i = 0; i < arr.length; i++) {
        squaredArray.push(arr[i] * arr[i]);
    }

    return squaredArray;
}

console.log(squareArrayElements([1, 2, 3, 4, 5]));
