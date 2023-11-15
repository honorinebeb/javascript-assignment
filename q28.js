// unction palandrome(string){
    
//     var stringArray=string.split('');
//     const reversed=stringArray.reverse();
//     const joined=reversed.join('');
//     if(string === reversed){
//         return "this string is palindrome"
//     }else{
//         return "this word not palindrome"
//     }
// }
// console.log( palandrome('dad'));
function isPalindrome(inputString) {

    const cleanedString = inputString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    
    return cleanedString === cleanedString.split('').reverse().join('');
  }
  
  console.log(isPalindrome('DAD'));
  