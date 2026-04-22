var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractEmployee = /** @class */ (function () {
    function AbstractEmployee() {
    }
    return AbstractEmployee;
}());
//normal worker
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(salary) {
        var _this = _super.call(this) || this;
        _this.baseSalary = salary;
        return _this;
    }
    Employee.prototype.getSalary = function () {
        return this.baseSalary;
    };
    return Employee;
}(AbstractEmployee));
// testing normal worker
var emp1 = new Employee(1500);
console.log("Standard employee salary: " + emp1.getSalary() + " EUR");
// manager
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(salary) {
        var _this = _super.call(this) || this;
        _this.bonusAchieved = false;
        _this.baseSalary = salary;
        return _this;
    }
    Manager.prototype.setBonus = function (state) {
        this.bonusAchieved = state;
    };
    Manager.prototype.getSalary = function () {
        //if bonus reached > add 500
        return (this.bonusAchieved ? this.baseSalary + 500 : this.baseSalary);
    };
    return Manager;
}(AbstractEmployee));
//testing the manager
var manager1 = new Manager(2000);
console.log("Manager initial salary: " + manager1.getSalary() + " EUR");
manager1.setBonus(true);
console.log("Manager salary with bonus: " + manager1.getSalary() + " EUR");
// abstract class taht holds different workers
var Department = /** @class */ (function (_super) {
    __extends(Department, _super);
    function Department() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.employees = [];
        return _this;
    }
    Department.prototype.addEmployee = function (emp) {
        this.employees.push(emp);
    };
    return Department;
}(AbstractEmployee));
// normal payday
var RegularPayday = /** @class */ (function (_super) {
    __extends(RegularPayday, _super);
    function RegularPayday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RegularPayday.prototype.getSalary = function () {
        var totalPayroll = 0;
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var employee = _a[_i];
            totalPayroll += employee.getSalary();
        }
        return totalPayroll;
    };
    return RegularPayday;
}(Department));
//testing normal payday
var regularMonth = new RegularPayday();
regularMonth.addEmployee(new Employee(1500));
regularMonth.addEmployee(new Employee(1500));
var man2 = new Manager(2500);
man2.setBonus(true);
regularMonth.addEmployee(man2);
console.log("---------------------------");
console.log("Total department wages (Regular month): " + regularMonth.getSalary() + " EUR");
// holiday pay
var HolidayPayday = /** @class */ (function (_super) {
    __extends(HolidayPayday, _super);
    function HolidayPayday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HolidayPayday.prototype.getSalary = function () {
        var totalPayroll = 0;
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var employee = _a[_i];
            totalPayroll += employee.getSalary();
        }
        return totalPayroll * 1.5;
    };
    return HolidayPayday;
}(Department));
//testing holiday pay
var holidayMonth = new HolidayPayday();
holidayMonth.addEmployee(new Employee(1500));
holidayMonth.addEmployee(new Employee(1500));
holidayMonth.addEmployee(man2);
console.log("Total department wages (Holiday month 1.5x pay): " + holidayMonth.getSalary() + " EUR (2 standard employees, 1 manager with a total salary of 3000EUR)");
