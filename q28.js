function palandrome(string){
    const reversedValue=string.split('').reverse().join('');
    if(string === reversedValue){
        return "this string is palindrome"
    }else{
        return "this word not palindrome"
    }
}
console.log( palandrome('dad'));

  