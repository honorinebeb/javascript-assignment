function findMedian(numbers) {
    
    if (numbers.length === 0) {
      return undefined;
    }
  
    const sortedArray = numbers.slice().sort((a, b) => a - b);
  
    const middleIndex = Math.floor(sortedArray.length / 2);
  
    if (sortedArray.length % 2 === 0) {
      return (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2;
    } else {
      
      return sortedArray[middleIndex];
    }
  }

  

  console.log(findMedian([2, 4, 6, 8, 10])); 