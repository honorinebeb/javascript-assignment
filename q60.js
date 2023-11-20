function calculateRectanglePerimeter(length, width) {
    
    if (length <= 0 || width <= 0) {
      return 'Length and width must be positive numbers';
    }
  
    
    const perimeter = 2 * (length + width);
  
    return perimeter;
  }
  
  
  const length = 5;
  const width = 8;
  
  const perimeter = calculateRectanglePerimeter(length, width);
  console.log(perimeter); 