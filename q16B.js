function modifyDisplayArray(arr) {
    const array = arr.slice(0, 3).concat(arr.slice().sort((a, b) => a - b), arr.slice(-3));
    console.log(array);
}
var numbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];
modifyDisplayArray(numbers);