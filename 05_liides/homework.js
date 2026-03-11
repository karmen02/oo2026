var JoulesToCal = /** @class */ (function () {
    function JoulesToCal() {
    }
    JoulesToCal.prototype.calculate = function (J) {
        return J / 4.184;
    };
    JoulesToCal.prototype.inputUnit = function () {
        return "J";
    };
    JoulesToCal.prototype.outputUnit = function () {
        return "cal";
    };
    return JoulesToCal;
}());
var CalToJoules = /** @class */ (function () {
    function CalToJoules() {
    }
    CalToJoules.prototype.calculate = function (_cal) {
        return _cal * 4.184;
    };
    CalToJoules.prototype.inputUnit = function () {
        return "cal";
    };
    CalToJoules.prototype.outputUnit = function () {
        return "J";
    };
    return CalToJoules;
}());
var JoulesToKcal = /** @class */ (function () {
    function JoulesToKcal() {
    }
    JoulesToKcal.prototype.calculate = function (J) {
        // Formula: kcal = J / 4184
        return J / 4184;
    };
    JoulesToKcal.prototype.inputUnit = function () {
        return "J";
    };
    JoulesToKcal.prototype.outputUnit = function () {
        return "kcal";
    };
    return JoulesToKcal;
}());
var KcalToJoules = /** @class */ (function () {
    function KcalToJoules() {
    }
    KcalToJoules.prototype.calculate = function (kcal) {
        // Formula: J = kcal * 4184
        return kcal * 4184;
    };
    KcalToJoules.prototype.inputUnit = function () {
        return "kcal";
    };
    KcalToJoules.prototype.outputUnit = function () {
        return "J";
    };
    return KcalToJoules;
}());
