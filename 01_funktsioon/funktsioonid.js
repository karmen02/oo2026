//funktsoon 1
function sayHello() {
    return "Hello, World!";
}
var message1 = sayHello();
console.log(message1);
//funktsioon 2
function multiplying(a, b) {
    return a * b;
}
var result = multiplying(3, 8); //korrutan, valin numbrid mis on a ja b asemel.
console.log(result);
//funkts. 3 - BMI calucation
function BMI(cm, kg) {
    var m = cm / 100;
    return kg / (m * m);
}
var values = BMI(175, 70);
console.log("BMI on: " + values);
//saab ka nii et console.log(BMI(180, 75));
var weights = [80, 90, 100, 110, 115];
for (var _i = 0, weights_1 = weights; _i < weights_1.length; _i++) {
    var weight = weights_1[_i];
    console.log(BMI(180, weight));
}
//map runs the given function once for each value in the array
// for each weight, bmi is called
//the returned BMI values are collected into a new array
var bmivalue = weights.map(function (weight) { return BMI(180, weight); });
console.log(bmivalue);
//funkts 4 - different way of finding BMI
function BMI2(cm, kg) {
    var m = cm / 100;
    return 1.3 * kg / Math.pow(m, 2.5);
}
var bmivalue2 = weights.map(function (weight) { return BMI2(180, weight); });
console.log(bmivalue2);
var results = [];
for (var height = 150; height < 190; height += 2) {
    results.push([
        height,
        BMI(height, 90),
        BMI2(height, 90)
    ]);
}
;
console.log(results);
//area of circle
function area(radius) {
    var pi = 3.1415;
    //return pi*radius*radius;
    var area = pi * Math.pow(radius, 2);
    var roundArea = Math.round(area * 100) / 100;
    return roundArea;
}
var radius = 10;
var area1 = area(radius);
console.log("area of the circle is: " + area1 + " cm squared. The radius is: " + radius + " cm");
//console.log("Area is: " + area1 + " cm squared.");
