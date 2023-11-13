function average(arr){
    let ave= 0;
    for (i = 0; i<arr.length; i++){
        ave += arr[i];
    }
    
    avg = ave/arr.length;
    console.log("The average of the given array elements: ", avg)
}

let s = [4,2,3,6];
average(s);