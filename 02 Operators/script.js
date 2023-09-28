let bmiEquation = (mass, height) => {
    let bmi = mass / height ** 2;
    return bmi;
}

let markMass=95;
let markHeight=1.88;

let johnMass=85;
let johnHeight=1.76;

let markBmi = bmiEquation(markMass, markHeight);

let johnBmi = bmiEquation(johnMass, johnHeight);

let markHigherBmi;

if(markBmi > johnBmi) {
    markHigherBmi = true;
} else {
    markHigherBmi = false;
}

if(markHigherBmi) {
    console.log("Mark has a higher BMI than John")
} else {
    console.log("Mark does not have a higher BMI than John")
}