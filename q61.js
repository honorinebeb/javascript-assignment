function containsOnlyDigits(inputString) {
    for (let i = 0; i < inputString.length; i++) {
      if (isNaN(parseInt(inputString[i]))) {
        return false;
      }
    }
    return true;
  }
  

  const string1 = "12345";
  const string2 = "abc123";
  const string3 = "  567  ";
  
  console.log(containsOnlyDigits(string1)); 
  console.log(containsOnlyDigits(string2)); 
  console.log(containsOnlyDigits(string3))