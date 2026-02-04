//Calculating net vs gross salary via functions
//Gross salary is before any deductions, net is after deductions.  
//This is not taking into account the minimum salary income which is 700EUR per month and the pension contributions. 
//Using typical estonian tax rates for calculations. These are: income tax of 20%, social tax of 33% and unemployment insurance of 1.6%.

//As taxes unchanging in time, except when the gov. decides to change them, theyre being kept as constants.
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
    //we still have money left over, it should be further taxed with income tax. As well as if the current taxed Salary is smaller than 0,
    //that for further calculations it should be zero.
    if (taxedSalary < 0){
        taxedSalary = 0;
    }
    //calculating the rest of the taxed sum after the tax free wages and then calculating the whole net salary and rounding it down
    let incomeTaxAmount: number = taxedSalary * incomeTax;
    let salaryNet: number = grossSalary - unemploymentInsuranceAmount - incomeTaxAmount;
    return Math.round(salaryNet * 100) / 100;
}

//Initial gross salary to show how the program works. 
let grossSalary: number = 2000;
let netWage: number = salaryNet(grossSalary);
console.log("If gross salary is " + grossSalary + "EUR. Then the net salary would be " + netWage + "EUR. ")

//These are only to show net salaries for general salaries.
let salaries: number[]=[900, 1100, 1300, 1500, 1700, 1900, 2100, 2300, 2500, 2900, 3100]

for(let salary of salaries){
    console.log(salaryNet(salary));
}

