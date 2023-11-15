function countCharacters(string) {
    return string.split(' ').join('').length;
}
var string = "Hello dude!p";
console.log(countCharacters(string));