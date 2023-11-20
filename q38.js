function removeDuplicates(arr){
    return [...new Set(arr)];
}
console.log(removeDuplicates([1,1,3,2,4,5,6,4,5]));