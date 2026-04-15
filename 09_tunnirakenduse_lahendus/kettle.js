var Water = /** @class */ (function () {
    function Water(waterAmount, temperature) {
        this.power = 0; //starts at 0 meaning heater is switched OFF
        this.specialHeatCap = 4200;
        this.waterAmount = waterAmount;
        this.temperature = temperature;
    }
    Water.prototype.setPower = function (newPower) {
        //power is J/s
        this.power = newPower;
    };
    Water.prototype.getTemperature = function () {
        return this.temperature;
    };
    //power, wateramount, special heat capac
    Water.prototype.heatASecond = function () {
        var joules = this.power;
        var temp = this.power / ((this.waterAmount / 1000) * this.specialHeatCap);
        this.temperature += temp;
    };
    Water.prototype.calculateHeatingTime = function (targetTemperature) {
        //time  = energy /power and power = this.heatingPower
        var delta = targetTemperature - this.temperature;
        var energy = (this.waterAmount / 1000) * this.specialHeatCap * delta;
        var time = energy / this.power;
        return time;
    };
    return Water;
}());
var w = new Water(800, 20);
console.log(w.getTemperature());
w.setPower(1500);
console.log("after setting the heating power " + w.getTemperature());
w.heatASecond();
console.log("The temperature after one second is " + w.getTemperature());
var target = 80;
var timeReq = w.calculateHeatingTime(target);
console.log("The heating time is " + timeReq);
