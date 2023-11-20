function stringModifier(string,position,character){
    
        var arr=string.split('');
        arr[position]=character;
        return arr.join('');

    }
console.log( stringModifier("happy",4,'o'))

