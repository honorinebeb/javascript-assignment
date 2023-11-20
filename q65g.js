function convertCurrency(amount, sourceCurrency, targetCurrency) {
    let convertedAmount;
  
    switch (`${sourceCurrency.toUpperCase()}_${targetCurrency.toUpperCase()}`) {
      case 'USD_EUR':
        convertedAmount = amount * 0.85; // Replace with actual exchange rates
        break;
      case 'EUR_USD':
        convertedAmount = amount / 0.85; // Replace with actual exchange rates
        break;
      case 'USD_GBP':
        convertedAmount = amount * 0.73; // Replace with actual exchange rates
        break;
      case 'GBP_USD':
        convertedAmount = amount / 0.73; // Replace with actual exchange rates
        break;
      case 'EUR_GBP':
        convertedAmount = amount * 0.86; // Replace with actual exchange rates
        break;
      case 'GBP_EUR':
        convertedAmount = amount / 0.86; // Replace with actual exchange rates
        break;
      // Add more cases for additional currency pairs as needed
      default:
        console.log('Invalid currency pair');
        return;
    }
  
    return convertedAmount.toFixed(2); // Limit to 2 decimal places
  }
  
  // Example usage:
  const amountToConvert = 100;
  const sourceCurrency = 'USD';
  const targetCurrency = 'EUR';
  
  const convertedAmount = convertCurrency(amountToConvert, sourceCurrency, targetCurrency);
  console.log(`${amountToConvert} ${sourceCurrency} is approximately ${convertedAmount} ${targetCurrency}`);