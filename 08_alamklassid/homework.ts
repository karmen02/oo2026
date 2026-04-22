abstract class AbstractEmployee {
    abstract getSalary(): number;
}

//normal worker
class Employee extends AbstractEmployee {
    baseSalary: number;

    constructor(salary: number) {
        super();
        this.baseSalary = salary;
    }

    getSalary(): number {
        return this.baseSalary;
    }
}

// testing normal worker
let emp1 = new Employee(1500);
console.log("Standard employee salary: " + emp1.getSalary() + " EUR");


// manager
class Manager extends AbstractEmployee {
    baseSalary: number;
    bonusAchieved: boolean = false; 

    constructor(salary: number) {
        super();
        this.baseSalary = salary;
    }

    setBonus(state: boolean) {
        this.bonusAchieved = state;
    }

    getSalary(): number {
        //if bonus reached > add 500
        return (this.bonusAchieved ? this.baseSalary + 500 : this.baseSalary);
    }
}

//testing the manager
let manager1 = new Manager(2000);
console.log("Manager initial salary: " + manager1.getSalary() + " EUR");

manager1.setBonus(true);
console.log("Manager salary with bonus: " + manager1.getSalary() + " EUR");


// abstract class taht holds different workers
abstract class Department extends AbstractEmployee {
    employees: AbstractEmployee[] = [];

    addEmployee(emp: AbstractEmployee) {
        this.employees.push(emp);
    }
}

// normal payday
class RegularPayday extends Department {
    getSalary(): number {
        let totalPayroll: number = 0;

        for (let employee of this.employees) {
            totalPayroll += employee.getSalary();
        }
        return totalPayroll;
    }
}

//testing normal payday
let regularMonth = new RegularPayday();
regularMonth.addEmployee(new Employee(1500));
regularMonth.addEmployee(new Employee(1500));

let man2 = new Manager(2500);
man2.setBonus(true);
regularMonth.addEmployee(man2);

console.log("---------------------------");
console.log("Total department wages (Regular month): " + regularMonth.getSalary() + " EUR");


// holiday pay
class HolidayPayday extends Department {
    getSalary(): number {
        let totalPayroll: number = 0;

        for (let employee of this.employees) {
            totalPayroll += employee.getSalary();
        }
        return totalPayroll * 1.5;
    }
}

//testing holiday pay
let holidayMonth = new HolidayPayday();
holidayMonth.addEmployee(new Employee(1500));
holidayMonth.addEmployee(new Employee(1500));
holidayMonth.addEmployee(man2); 

console.log("Total department wages (Holiday month 1.5x pay): " + holidayMonth.getSalary() + " EUR (2 standard employees, 1 manager with a total salary of 3000EUR)");