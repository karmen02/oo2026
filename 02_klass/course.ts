class Course{
    constructor(protected credits:number){}

    gpaContribution(grade:number):number{
        return grade*this.credits;
    }
    getCredits(): number {
        return this.credits;
    }
}
//defining courses and credits

let math = new Course(4);
let english = new Course(6);
let programming = new Course(5);

//
let mathGrade=4.0;
let englishGrade= 3.3;
let programmingGrade= 4.5;

let totalPoints=0;

totalPoints +=math.gpaContribution(mathGrade);
totalPoints +=english.gpaContribution(englishGrade);
totalPoints += programming.gpaContribution(programmingGrade);

let totalCredits = math.getCredits() + english.getCredits() + programming.getCredits();

//  GPA
let gpa = totalPoints / totalCredits;
console.log('Total credits:', totalCredits, 'GPA:', gpa);

//create array to pass grades of several students
let students1 = [
    {name: "Alice", mathGrade: 4.0, englishGrade: 3.3, programmingGrade: 3.7},
    {name: "Bob", mathGrade: 3.5, englishGrade: 3.0, programmingGrade: 3.8},
    {name: "Charlie", mathGrade: 3.8, englishGrade: 3.5, programmingGrade: 4.0}
];

//calculate the gpa for each student 
for (let student of students1) {
    let totalPoints = 0;

    totalPoints += math.gpaContribution(student.mathGrade);
    totalPoints += english.gpaContribution(student.englishGrade);
    totalPoints += programming.gpaContribution(student.programmingGrade);

    let gpa=totalPoints/totalCredits
    console.log("The gpa for " + student.name + " is ", gpa)
}
