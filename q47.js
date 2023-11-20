function getRandomNumber(min, max) {
    
    const randomDecimal = Math.random();
  
    
    const randomNumber = min + randomDecimal * (max - min);
  
    return Math.floor(randomNumber);
  }
  
  const result = getRandomNumber(1, 11);
  console.log(result);