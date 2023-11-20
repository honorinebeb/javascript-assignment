function getFirstNElements(arr, n) {
    var result = [];

    for (var i = 0; i < n && i < arr.length; i++) {
        result.push(arr[i]);
    }

    return result;
}

console.log(getFirstNElements([1, 2, 3, 4, 5],2));