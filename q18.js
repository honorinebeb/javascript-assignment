function calculateBMI(height,weight){
//     const heightInMeter = height /100;
// 
const bmi = weight / (height * height);
console.log(bmi)
if(bmi < 18.6){
    return 'underweight';
}
else if (bmi >=18.6 && bmi <= 24.9 ){
    return 'normal'
}
else{
    return 'overweight'
}
}

const height = 15;
const weight = 60;
console.log(calculateBMI(56,89));