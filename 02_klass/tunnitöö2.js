var Student = /** @class */ (function () {
    function Student(mathGrade, englishGrade) {
        this.mathGrade = mathGrade;
        this.englishGrade = englishGrade;
    }
    //this method is to show the grades
    Student.prototype.show = function () {
        console.log(this.mathGrade, this.englishGrade);
    };
    // this method is to calculate the average grade
    Student.prototype.showAverage = function () {
        return ((this.mathGrade + this.englishGrade) / 2);
    };
    //this method is to add the grades of the same subject
    Student.prototype.add = function (other) {
        return new Student(this.mathGrade + other.mathGrade, this.englishGrade + other.englishGrade);
    };
    Student.prototype.averageMath = function (count) {
        return this.mathGrade / count;
    };
    Student.prototype.improveMath = function () {
        this.mathGrade += 5;
    };
    return Student;
}());
var s1 = new Student(85, 92);
var s2 = new Student(78, 88);
//array of students
var students = [
    new Student(80, 90),
    new Student(91, 86),
    new Student(90, 50),
];
//combine all students into one total
var classTotal = students[0];
for (var i = 1; i < students.length; i++) {
    classTotal = classTotal.add(students[i]);
}
var n = students.length;
console.log("class average", classTotal.averageMath(n));
//console.log(Math grade: ${s1.mathGrade});
s1.show();
console.log("Average of student 1s grades: " + s1.showAverage());
var combined = s1.add(s2);
combined.show();
console.log("Average of both students: " + combined.averageMath(2));
s1.improveMath();
s1.show();
