var CentiToInches = /** @class */ (function () {
    function CentiToInches() {
    }
    CentiToInches.prototype.calculate = function (cm) {
        return cm / 2.54;
    };
    CentiToInches.prototype.inputUnit = function () {
        return "cm";
    };
    CentiToInches.prototype.outputUnit = function () {
        return "in";
    };
    return CentiToInches;
}());
var InchesToCm = /** @class */ (function () {
    function InchesToCm() {
    }
    InchesToCm.prototype.calculate = function (inch) {
        return inch * 2.54;
    };
    InchesToCm.prototype.inputUnit = function () {
        return "in";
    };
    InchesToCm.prototype.outputUnit = function () {
        return "cm";
    };
    return InchesToCm;
}());
