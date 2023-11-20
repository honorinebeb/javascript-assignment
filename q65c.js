function getGrade(score) {
    let grade;
  
    switch (true) {
      case score >= 90:
        grade = 'A';
        break;
      case score >= 80:
        grade = 'B';
        break;
      case score >= 70:
        grade = 'C';
        break;
      case score >= 60:
        grade = 'D';
        break;
      case score >= 0:
        grade = 'F';
        break;
      default:
        grade = 'Invalid score';
    }
  
    return grade;
  }
  
  // Example usage:
  const studentScore = 85;
  const studentGrade = getGrade(studentScore);
  
  console.log(`Score: ${studentScore}, Grade: ${studentGrade}`);