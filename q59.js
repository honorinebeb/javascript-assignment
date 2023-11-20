function calculateRectangleArea(length, width) {
    if (length <= 0 || width <= 0) {
      return 'Length and width must be positive numbers';
    }
    const area = length * width;
  
    return area;
  }
  
  const length = 5;
  const width = 8;
  
  const area = calculateRectangleArea(length, width);
  console.log(area);