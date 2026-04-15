class Water {
    waterAmount: number;
    temperature: number;
    power: number =0; //starts at 0 meaning heater is switched OFF
    readonly specialHeatCap: number = 4200;
    
    constructor(waterAmount: number, temperature: number) {
        this.waterAmount = waterAmount;
        this.temperature = temperature;

    }
    setPower(newPower: number): void{
        //power is J/s
        this.power = newPower;
    }

    getTemperature():number{
        return this.temperature;
    }
    //power, wateramount, special heat capac
    heatASecond():void{
        let joules = this.power;
        const temp = this.power / ((this.waterAmount/1000) * this.specialHeatCap)
        this.temperature += temp;
    }
    calculateHeatingTime(targetTemperature: number): number { 
        //time  = energy /power and power = this.heatingPower
        const delta = targetTemperature - this.temperature;
        const energy = (this.waterAmount/1000) * this.specialHeatCap *delta
        const time = energy / this.power;
        return time;
    }
}
let w = new Water(800, 20);

console.log(w.getTemperature());
w.setPower(1500);
console.log("after setting the heating power " + w.getTemperature());
w.heatASecond();
console.log("The temperature after one second is " + w.getTemperature());

const target = 80;
const timeReq = w.calculateHeatingTime(target);
console.log("The heating time is " + timeReq);
