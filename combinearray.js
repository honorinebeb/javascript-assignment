function arrayCombiner(arr1, arr2){
    for (let i = 0; i<arr1.length; i++){
        arr2.push(arr1[i]);
    }
    console.log(arr2);
}
let a = [4,3,2,6];
let b= [5,7,9,4];
arrayCombiner(a,b);