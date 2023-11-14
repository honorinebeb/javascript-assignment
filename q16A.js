function sortArrayAscending(arr) {
    return arr.sort((a, b) => a - b);
}
var numbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];
console.log(sortArrayAscending(numbers));