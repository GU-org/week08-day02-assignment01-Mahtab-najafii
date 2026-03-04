function bmiCalc(w,h){
    let bmi=w/(h*h);
    return bmi;
}
var weight=prompt("Please enter your weight in Kg");
var height=prompt("Please enter your height in m");
let bmi=bmiCalc(weight,height);
let result="";

if (bmi< 18.5){
    result="Your BMI is "+bmi+", so you are underweight.";
} else if(bmi>=18.5 && bmi<24.9){
    result="Your BMI is "+bmi+ ", so you have a normal weight.";
} else if(bmi>24.9){
    result("Your BMI is "+bmi+", so you are ovwrweight.");
}
alert(result);