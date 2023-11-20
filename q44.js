function areAllElementsPositive(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            return "positive number";
        }
    }
    return "not positive number";
}


console.log(areAllElementsPositive([-1, -2, -3, -4, -5]));
