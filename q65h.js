function calculateArea(shape, dimensions) {
    switch (shape.toLowerCase()) {
      case 'circle':
        const radius = parseFloat(dimensions);
        if (!isNaN(radius) && radius > 0) {
          const area = Math.PI * Math.pow(radius, 2);
          return area.toFixed(2);
        } else {
          return 'Invalid radius';
        }
      case 'square':
        const side = parseFloat(dimensions);
        if (!isNaN(side) && side > 0) {
          const area = Math.pow(side, 2);
          return area.toFixed(2);
        } else {
          return 'Invalid side length';
        }
      case 'triangle':
        const [base, height] = dimensions.split(',').map(parseFloat);
        if (!isNaN(base) && !isNaN(height) && base > 0 && height > 0) {
          const area = 0.5 * base * height;
          return area.toFixed(2);
        } else {
          return 'Invalid base or height';
        }
      default:
        return 'Invalid shape';
    }
  }
  
  // Example usage:
  const userShape = prompt('Enter the shape (circle, square, triangle):');
  const userDimensions = prompt('Enter the dimensions (comma-separated for triangle, single value for circle/square):');
  
  const result = calculateArea(userShape, userDimensions);
  console.log(`The area of the ${userShape} is: ${result}`);