//funktsoon 1
function sayHello(){
    return "Hello, World!";
}
let message1 = sayHello();
console.log(message1);

//funktsioon 2
function multiplying(a:number, b:number){
    return a*b;
}

let result = multiplying(3,8); //korrutan, valin numbrid mis on a ja b asemel.
console.log(result);

//funkts. 3 - BMI calucation
function BMI(cm:number, kg:number):number {
    let m = cm / 100
    return kg / (m*m)
}

let values = BMI(175, 70);
console.log("BMI on: " + values);
//saab ka nii et console.log(BMI(180, 75));

let weights: number[]=[80, 90, 100, 110, 115]

for(let weight of weights){
    console.log(BMI(180, weight));
}
//map runs the given function once for each value in the array
// for each weight, bmi is called
//the returned BMI values are collected into a new array
let bmivalue: number[] = weights.map(weight => BMI(180, weight));
console.log(bmivalue);


//funkts 4 - different way of finding BMI
function BMI2 (cm:number, kg:number):number{
    let m:number = cm / 100;
    return 1.3*kg/Math.pow(m,2.5);
}

let bmivalue2:number[] = weights.map(weight => BMI2(180, weight));
console.log(bmivalue2);

let results: number[][] = [];

for(let height=150; height<190; height+=2){
    results.push([
        height,
        BMI(height, 90),
        BMI2(height, 90)

    ])
};
console.log(results);

//area of circle
function area(radius:number){
    const pi:number = 3.1415;
    //return pi*radius*radius;
    let area: number = pi * Math.pow(radius, 2);
    let roundArea: number = Math.round(area*100)/100;
    return roundArea;
}

let radius: number = 10;
let area1:number = area(radius);
console.log("area of the circle is: " + area1 + " cm squared. The radius is: " + radius + " cm");

//console.log("Area is: " + area1 + " cm squared.");
