class Student {
    constructor(protected mathGrade:number, protected englishGrade:number){}

    //this method is to show the grades
    show(): void {
        console.log(this.mathGrade, this.englishGrade);
    }
    // this method is to calculate the average grade
    showAverage(): number {
        return ((this.mathGrade + this.englishGrade) / 2);
    }
    //this method is to add the grades of the same subject
    add(other:Student):Student {
        return new Student(this.mathGrade + other.mathGrade, 
            this.englishGrade + other.englishGrade);
    }

    averageMath(count:number):number{
        return this.mathGrade/count;
        
    }
    improveMath():void{
        this.mathGrade += 5;
    }
}

let s1: Student=new Student(85, 92);
let s2: Student=new Student(78, 88);

//array of students
let students: Student[]=[
    new Student(80,90),
    new Student(91, 86),
    new Student(90, 50),
]

//combine all students into one total
let classTotal=students[0];

for(let i=1; i<students.length; i++){
    classTotal=classTotal.add(students[i]);
}
const n=students.length;
console.log("class average", classTotal.averageMath(n));

//console.log(Math grade: ${s1.mathGrade});

s1.show()
console.log("Average of student 1s grades: " + s1.showAverage());

let combined=s1.add(s2);
combined.show();

console.log("Average of both students: " + combined.averageMath(2));

s1.improveMath();
s1.show();

