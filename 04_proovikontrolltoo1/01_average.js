function Average(nr1, nr2, nr3) {
    var avg = (nr1 + nr2 + nr3) / 3;
    return avg;
}
console.log(Average(5, 8, 7));
function AvgArray(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum / numbers.length;
}
console.log(AvgArray([4, 5, 6, 7]));
function AvgArray1(arr) {
    return arr.reduce(function (s, v) { return s + v; }, 0) / arr.length;
    //s= sum
    //v= Current value
    //0=starting value of the sum
}
console.log(AvgArray1([4, 5, 6, 7]));
//Sliding average
function slidingAverage(arr) {
    var averages = [];
    //i=0 (i starts from the index 0)
    for (var i = 0; i < arr.length - 2; i++) {
        averages.push(Average(arr[i], arr[i + 1], arr[i + 2]));
    }
    return averages;
}
console.log(slidingAverage([4, 5, 6, 7, 8, 9, 10]));
function slidingAverage1(arr, windowSize) {
    if (windowSize === void 0) { windowSize = 2; }
    var averages = [];
    for (var i = 0; i < arr.length - windowSize; i++) {
        averages.push(AvgArray(arr.slice(i, i + windowSize))); //start and end
    }
    return averages;
}
console.log(slidingAverage1([4, 5, 6, 7, 8, 9, 10]));
