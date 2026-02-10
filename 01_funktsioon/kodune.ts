//Calculating net vs gross salary via functions. 
//Not taking into account monthly pension contributions. Only taking into account monthly tax free sum of 700€, income tax of 22% and unemployment insurance of 1.6%.
//As taxes are unchanging in time, except when the gov. decides to change them, theyre being kept as constants.
//Not meant for salaries over 1200EUR per month.
const unemploymentInsurance: number = 0.016;
const incomeTax: number = 0.22;
const taxFree: number = 700;
//Calculating the net salary.
function salaryNet(grossSalary: number): number {
    //calculating the unemployment insurace as well as the income before income tax.
    let unemploymentInsuranceAmount: number = grossSalary * unemploymentInsurance;
    let taxedSum: number = grossSalary - unemploymentInsuranceAmount;
    //calculating the income tax with the included tax free basis of 700EUR
    let taxedSalary = taxedSum - taxFree;
    //Telling the program that, if after dividing the initial taxed wage (that already has unemployment insurance calculated off of it)
    //we still have money left over, it should be further taxed with income tax. As well as if the current taxed salary is smaller than 0,
    //that for further calculations it should be zero.
    if (taxedSalary < 0){
        taxedSalary = 0;
    }
    //calculating the rest of the taxed sum after the tax free wages and then calculating the whole net salary and rounding it down
    let incomeTaxAmount: number = taxedSalary * incomeTax;
    let salaryNet: number = grossSalary - unemploymentInsuranceAmount - incomeTaxAmount;
    return Math.round(salaryNet * 100) / 100;
}

let spacing:string="*******************"

//Initial gross salary to show how the program works. 
let grossSalary: number = 886;
let netWage: number = salaryNet(grossSalary);
console.log("Initial example. If gross salary is " + grossSalary + "EUR. Then the net salary would be " + netWage + "EUR. ")

console.log(spacing)
//These are only to show net salaries for general salaries.
let message:string="More examples of gross salaries per month and their comparisons to net salaries. Keep in mind this is an example and the math changes with an income that's over 7848 EUR per year(1200 EUR per month)."
console.log(message)

let salaries: number[]=[900, 1100, 1300, 1500, 1700, 1900, 2100, 2300, 2500, 2900, 3100]

for(let salary of salaries){
    console.log(salary + " EUR =  " + salaryNet(salary) + "EUR");
}

console.log(spacing)

let message1:string="Showing gross salaries with intervals of 75 EUR, up to 1200 EUR, and their respective net salaries."
console.log(message1)

let salaries2: (number | string) [][]=[]
for(let grossSalary=300; grossSalary<=1200; grossSalary+=75){
    salaries2.push([
        grossSalary + " EUR", 
        salaryNet(grossSalary) + " EUR"
    ])
}
for (let entry of salaries2) {
    console.log(entry[0] + " = " + entry[1]);
}