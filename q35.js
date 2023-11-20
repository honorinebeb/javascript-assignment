function countVowels(vowel){
    let count = 0;
    var vowels =["a","i","u","o","e"];
    var lowercase = vowel.toLowerCase();
    for(i=0; i<=vowel.length; i++){
        if(vowels.includes(lowercase[i])){
            count++;
        }
    }

    return count;

}console.log(countVowels("honorine"));