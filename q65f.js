function showMenu() {
    console.log('Menu:');
    console.log('1. Add');
    console.log('2. Subtract');
    console.log('3. Multiply');
    console.log('4. Divide');
    console.log('5. Exit');
  }
  
  function performOperation(operation, num1, num2) {
    let result;
  
    switch (operation) {
      case 1:
        result = num1 + num2;
        console.log(`Result: ${result}`);
        break;
      case 2:
        result = num1 - num2;
        console.log(`Result: ${result}`);
        break;
      case 3:
        result = num1 * num2;
        console.log(`Result: ${result}`);
        break;
      case 4:
        if (num2 !== 0) {
          result = num1 / num2;
          console.log(`Result: ${result}`);
        } else {
          console.log('Cannot divide by zero');
        }
        break;
      case 5:
        console.log('Exiting the program');
        break;
      default:
        console.log('Invalid operation');
    }
  }
  
  // Example usage:
  let userChoice;
  
  do {
    showMenu();
    userChoice = parseInt(prompt('Enter your choice (1-5):'));
  
    if (userChoice >= 1 && userChoice <= 4) {
      const number1 = parseFloat(prompt('Enter the first number:'));
      const number2 = parseFloat(prompt('Enter the second number:'));
  
      performOperation(userChoice, number1, number2);
    } else if (userChoice !== 5) {
      console.log('Invalid choice. Please enter a number between 1 and 5.');
    }
  } while (userChoice !== 5);