function detectSeason(month) {
    
    const lowercasedMonth = month.toLowerCase();
  
    switch (lowercasedMonth) {
      case 'december':
      case 'january':
      case 'february':
        return 'Winter';
      case 'march':
      case 'april':
      case 'may':
        return 'Spring';
      case 'june':
      case 'july':
      case 'august':
        return 'Summer';
      case 'september':
      case 'october':
      case 'november':
        return 'Fall';
      default:
        return 'Invalid month';
    }
  }
  
  
  console.log(detectSeason('july'));