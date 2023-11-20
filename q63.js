function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  // Example usage:
  const celsiusTemperature = 20;
  const convertedTemperature = celsiusToFahrenheit(celsiusTemperature);
  console.log(`Celsius: ${celsiusTemperature}°C, Fahrenheit: ${convertedTemperature}°F`);