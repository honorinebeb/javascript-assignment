function displaySortedFirstThree(arr) {
    const sortedArray = [...arr].sort((a, b) => a - b);
    console.log("Sorted Array:", sortedArray);
    console.log("First Three Numbers:", sortedArray.slice(0, 3));
}
var numbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];
displaySortedFirstThree(numbers);