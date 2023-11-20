function countConsonant(conso){
    let count = 0;
    var consonant =["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
    for(i=0; i<conso.length; i++){
        if(consonant.includes(conso[i])){
            count++;
        }
    }

    return count;

}console.log(countConsonant("Queen"));