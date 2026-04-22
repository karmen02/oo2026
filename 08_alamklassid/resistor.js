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
//Abstract class or Parent class
var AbstractResistor = /** @class */ (function () {
    function AbstractResistor() {
    }
    AbstractResistor.prototype.getCurrent = function (u) {
        return u / this.getResitance();
    };
    return AbstractResistor;
}());
var Resistor = /** @class */ (function (_super) {
    __extends(Resistor, _super);
    function Resistor(r) {
        var _this = _super.call(this) || this;
        _this.r = r;
        return _this;
    }
    Resistor.prototype.getResitance = function () {
        return this.r;
    };
    return Resistor;
}(AbstractResistor));
var resistor1 = new Resistor(220);
console.log("The resistance value of resistor 01: " + resistor1.getResitance());
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //Default state is SWITCH is off. 
        _this.on = false;
        return _this;
    }
    Switch.prototype.setOn = function (state) {
        this.on = state;
    };
    // getResitance(): number {
    //     if(this.on){
    //         return 0;
    //     }
    //     else{
    //         return 1000000000;
    //     }
    // }
    Switch.prototype.getResitance = function () {
        return (this.on ? 0 : 1000000000);
    };
    Switch.prototype.getCurrent = function (u) {
        if (u > 0) {
            if (this.on) {
                throw new Error("Short Circuit");
            }
        }
        return _super.prototype.getCurrent.call(this, u);
    };
    return Switch;
}(AbstractResistor));
//Function that takes any AbstractResistor and prints its resitance
function printResistance(r) {
    console.log(r.getResitance());
}
var s1 = new Switch();
console.log("The initial resistance value when it is off" + s1.getResitance());
s1.setOn(true);
console.log("The resistance value when the switch is on: " + s1.getResitance());
try {
    console.log(s1.getCurrent(5));
}
catch (e) {
    console.log("Caught error:", e.message);
}
//console.log(s1.getCurrent(5));
//Current =u/resitance value
//current=5/0=infinite
s1.setOn(false);
//current=5/100000000=0.00000000019(5e-9)
console.log(s1.getCurrent(5));
printResistance(s1);
var MultpleConnection = /** @class */ (function (_super) {
    __extends(MultpleConnection, _super);
    function MultpleConnection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resistors = [];
        return _this;
    }
    MultpleConnection.prototype.addResistor = function (r) {
        this.resistors.push(r);
    };
    return MultpleConnection;
}(AbstractResistor));
//This calss should finally return the total value of the resitars in the connection
var SeriesConnection = /** @class */ (function (_super) {
    __extends(SeriesConnection, _super);
    function SeriesConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeriesConnection.prototype.getResitance = function () {
        var totalResistance = 0;
        for (var _i = 0, _a = this.resistors; _i < _a.length; _i++) {
            var resistor = _a[_i];
            //get the resitance value of each resistor and add to the total
            totalResistance += resistor.getResitance();
        }
        return totalResistance;
    };
    return SeriesConnection;
}(MultpleConnection));
var ParallelConnection = /** @class */ (function (_super) {
    __extends(ParallelConnection, _super);
    function ParallelConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParallelConnection.prototype.getResitance = function () {
        var inverseSum = 0;
        for (var _i = 0, _a = this.resistors; _i < _a.length; _i++) {
            var resistor = _a[_i];
            inverseSum += 1 / resistor.getResitance();
        }
        return 1 / inverseSum;
    };
    return ParallelConnection;
}(MultpleConnection));
var p = new ParallelConnection();
p.addResistor(new Resistor(220));
p.addResistor(new Resistor(220));
console.log("Resistance of parallel connection" + p.getResitance());
var s = new SeriesConnection();
s.addResistor(new Resistor(220));
s.addResistor(new Resistor(220));
console.log("Resistance of series connection " + s.getResitance() + "ohms");
