//Calculating net vs gross salary via functions
//Gross salary is before any deductions, net is after deductions.  
//The program does not take into account monthly pension contributions.
//The program does take into account a monthly tax free sum of 700€. 
//Using typical estonian tax rates for calculations. These are: income tax of 22% and unemployment insurance of 1.6%.
//As taxes are unchanging in time, except when the gov. decides to change them, theyre being kept as constants.
//Not meant for salaries over 1200EUR per month.
var unemploymentInsurance = 0.016;
var incomeTax = 0.22;
var taxFree = 700;
//Calculating the net salary.
function salaryNet(grossSalary) {
    //calculating the unemployment insurace as well as the income before income tax.
    var unemploymentInsuranceAmount = grossSalary * unemploymentInsurance;
    var taxedSum = grossSalary - unemploymentInsuranceAmount;
    //calculating the income tax with the included tax free basis of 700EUR
    var taxedSalary = taxedSum - taxFree;
    //Telling the program that, if after dividing the initial taxed wage (that already has unemployment insurance calculated off of it)
    //we still have money left over, it should be further taxed with income tax. As well as if the current taxed salary is smaller than 0,
    //that for further calculations it should be zero.
    if (taxedSalary < 0) {
        taxedSalary = 0;
    }
    //calculating the rest of the taxed sum after the tax free wages and then calculating the whole net salary and rounding it down
    var incomeTaxAmount = taxedSalary * incomeTax;
    var salaryNet = grossSalary - unemploymentInsuranceAmount - incomeTaxAmount;
    return Math.round(salaryNet * 100) / 100;
}
var spacing = "*******************";
//Initial gross salary to show how the program works. 
var grossSalary = 2000;
var netWage = salaryNet(grossSalary);
console.log("If gross salary is " + grossSalary + "EUR. Then the net salary would be " + netWage + "EUR. ");
console.log(spacing);
//These are only to show net salaries for general salaries.
var message = "More examples of gross salaries per month and their comparisons to net salaries. Keep in mind this is an example and the math changes with an income that's over 7848 EUR per year(1200 EUR per month).";
console.log(message);
var salaries = [900, 1100, 1300, 1500, 1700, 1900, 2100, 2300, 2500, 2900, 3100];
for (var _i = 0, salaries_1 = salaries; _i < salaries_1.length; _i++) {
    var salary = salaries_1[_i];
    console.log(salary + " EUR =  " + salaryNet(salary) + "EUR");
}
console.log(spacing);
var message1 = "Showing gross salaries with intervals of 150EUR, up to 1200 EUR, and their respective net salaries.";
console.log(message1);
var salaries2 = [];
for (var grossSalary_1 = 300; grossSalary_1 <= 1200; grossSalary_1 += 75) {
    salaries2.push([
        grossSalary_1 + " EUR",
        salaryNet(grossSalary_1) + " EUR"
    ]);
}
console.log(salaries2);
