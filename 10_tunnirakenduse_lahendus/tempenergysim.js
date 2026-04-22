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
var w = new MaterialAmount(3, 20, 4200);
var i = new MaterialAmount(10, 20, 412);
w.energychange(10000);
i.energychange(10000);
console.log("***********************************");
console.log("Water temperature: ".concat(w.currentTemp().toFixed(2), "\u00B0C"));
console.log("Water temperature: ".concat(i.currentTemp().toFixed(2), "\u00B0C"));
// neljanda osa jaoks
if (i.currentTemp() > w.currentTemp()) {
    //raualt tuhat maha, veele juurde
    i.energychange(-1000);
    w.energychange(1000);
    console.log("Updated water temperature: ".concat(w.currentTemp().toFixed(2), "\u00B0C and updated iron temperature: ").concat(i.currentTemp().toFixed(2), "\u00B0C"));
}
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
//õhu testimine
var room = new AirAmount(5, 4, 3, 20);
console.log("***********************************");
console.log("The air mass in the room: ".concat(room.mass, " kg"));
room.energychange(10000);
console.log("Room temperature after adding 10000J of energy: ".concat(room.currentTemp().toFixed(2), "\u00B0C"));
//vaja teha:
//1. funktsioon - materjalide list, arvutab lõpp temperatuuri kui lubatakse energiat vahetada
// nt sama temp ei saa vahetada energiat ehk siis oleks  =, muidu nt > või <
//
var materials = [w, i, room];
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
var finalTemp = equalTemp(materials);
console.log("***********************************");
console.log("The FINAL temperatures are: ".concat(finalTemp.toFixed(2), "\u00B0C"));
