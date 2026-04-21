var Water = /** @class */ (function () {
    function Water(waterAmount, temperature) {
        //freezers cooling power in W
        this.power = 0;
        //energy req to change 1kg of water by 1deg Cel
        this.specialHeatCap = 4200;
        this.waterAmount = waterAmount;
        this.temperature = temperature;
    }
    //upd freezers cooling power
    Water.prototype.setPower = function (newPower) {
        this.power = newPower;
    };
    //current temp
    Water.prototype.getTemperature = function () {
        return this.temperature;
    };
    //math for cooling similar to classwork
    Water.prototype.coolASecond = function () {
        var joules = this.power;
        var temp = this.power / ((this.waterAmount / 1000) * this.specialHeatCap);
        this.temperature -= temp;
    };
    //total time to freeze/cool water
    Water.prototype.calculateCoolingTime = function (targetTemperature) {
        var delta = this.temperature - targetTemperature;
        var energy = (this.waterAmount / 1000) * this.specialHeatCap * delta;
        var time = energy / this.power;
        return time;
    };
    return Water;
}());
var w = new Water(800, 20);
console.log(w.getTemperature());
w.setPower(1500);
console.log("after setting the cooling power " + w.getTemperature());
w.coolASecond();
console.log("The temperature after one second is " + w.getTemperature());
var target = 0;
var timeReq = w.calculateCoolingTime(target);
console.log("The cooling time is " + timeReq);
