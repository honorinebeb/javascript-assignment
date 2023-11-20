function calculateFibonacci(n) {
    const fibonacciSequence = [0, 1];
  
    for (let i = 2; i < n; i++) {
      const nextFibonacci = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
      fibonacciSequence.push(nextFibonacci);
    }
  
    return fibonacciSequence;
  }
  
  
  
  console.log(calculateFibonacci(10));