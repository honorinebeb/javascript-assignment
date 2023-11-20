function removeLastElement(arr) {
    // Using slice to get a new array without the last element
    return arr.slice(0, -1);
}


console.log( removeLastElement([1, 2, 3, 4, 5]) );

