var Course = /** @class */ (function () {
    function Course(credits) {
        this.credits = credits;
    }
    Course.prototype.gpaContribution = function (grade) {
        return grade * this.credits;
    };
    Course.prototype.getCredits = function () {
        return this.credits;
    };
    return Course;
}());
//defining courses and credits
var math = new Course(4);
var english = new Course(6);
var programming = new Course(5);
//
var mathGrade = 4.0;
var englishGrade = 3.3;
var programmingGrade = 4.5;
var totalPoints = 0;
totalPoints += math.gpaContribution(mathGrade);
totalPoints += english.gpaContribution(englishGrade);
totalPoints += programming.gpaContribution(programmingGrade);
var totalCredits = math.getCredits() + english.getCredits() + programming.getCredits();
//  GPA
var gpa = totalPoints / totalCredits;
console.log('Total credits:', totalCredits, 'GPA:', gpa);
//create array to pass grades of several students
var students1 = [
    { name: "Alice", mathGrade: 4.0, englishGrade: 3.3, programmingGrade: 3.7 },
    { name: "Bob", mathGrade: 3.5, englishGrade: 3.0, programmingGrade: 3.8 },
    { name: "Charlie", mathGrade: 3.8, englishGrade: 3.5, programmingGrade: 4.0 }
];
//calculate the gpa for each student 
for (var _i = 0, students1_1 = students1; _i < students1_1.length; _i++) {
    var student = students1_1[_i];
    var totalPoints_1 = 0;
    totalPoints_1 += math.gpaContribution(student.mathGrade);
    totalPoints_1 += english.gpaContribution(student.englishGrade);
    totalPoints_1 += programming.gpaContribution(student.programmingGrade);
    var gpa_1 = totalPoints_1 / totalCredits;
    console.log("The gpa for " + student.name + " is ", gpa_1);
}
