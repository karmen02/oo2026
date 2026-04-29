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
var MaterialAmount = /** @class */ (function () {
    //water: 4200, air: 1012, iron: 412 j/kgC
    function MaterialAmount(mass, temperature, heatcapacity) {
        this.mass = mass;
        this.temperature = temperature;
        this.heatcapacity = heatcapacity;
    }
    //current temperature
    MaterialAmount.prototype.currentTemp = function () {
        return this.temperature;
    };
    MaterialAmount.prototype.energychange = function (energy) {
        // tempchange = Energy / (mass * heat cap)
        var tempchange = energy / (this.mass * this.heatcapacity);
        this.temperature += tempchange;
    };
    // Q = m*c*T
    //Q/T = m*c
    // m*c is heat cap of obj
    MaterialAmount.prototype.affect = function () {
        return this.mass * this.heatcapacity;
    };
    return MaterialAmount;
}());
var AirAmount = /** @class */ (function (_super) {
    __extends(AirAmount, _super);
    function AirAmount(length, width, height, temperature) {
        var _this = this;
        var volume = length * width * height;
        var density = 1.23;
        var mass = volume * density;
        _this = _super.call(this, mass, temperature, 1012) || this;
        _this.length = length;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    return AirAmount;
}(MaterialAmount));
// equal temp calc
function equalTemp(materials) {
    var totalThermalEnergy = 0;
    var totalAffect = 0;
    for (var _i = 0, materials_1 = materials; _i < materials_1.length; _i++) {
        var material = materials_1[_i];
        var influence = material.affect(); // mass *spets kuumus
        // phm mitu materjali
        totalAffect += influence;
        totalThermalEnergy += influence * material.currentTemp();
    }
    // lõpp temp vist??
    var finalTemp = totalThermalEnergy / totalAffect;
    return finalTemp;
}
