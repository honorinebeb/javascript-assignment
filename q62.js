function countWords(sentence) {
    
    const words = sentence.match(/\b\w+\b/g);
  
    return words ? words.length : 0;
  }
  const sentence1 = "This is a sample sentence.";
  const sentence2 = "   There     are    multiple    spaces.   ";
  const sentence3 = "";
  
  console.log(countWords(sentence1)); 
  console.log(countWords(sentence2)); 
  console.log(countWords(sentence3)); 