class Water {
    waterAmount: number;
    temperature: number;
    //freezers cooling power in W
    power: number = 0; 
    //energy req to change 1kg of water by 1deg Cel
    readonly specialHeatCap: number = 4200;
    
    constructor(waterAmount: number, temperature: number) {
        this.waterAmount = waterAmount;
        this.temperature = temperature;
    }

    //upd freezers cooling power
    setPower(newPower: number): void {
        this.power = newPower;
    }

    //current temp
    getTemperature(): number {
        return this.temperature;
    }


    //math for cooling similar to classwork
    coolASecond(): void {
        let joules=this.power;
        const temp=this.power / ((this.waterAmount/1000) * this.specialHeatCap);
        this.temperature -= temp; 
    }

    //total time to freeze/cool water
    calculateCoolingTime(targetTemperature: number): number { 
        const delta = this.temperature - targetTemperature; 
        const energy = (this.waterAmount/1000) * this.specialHeatCap * delta;
        const time = energy / this.power;
        return time;
    }
}

let w = new Water(800, 20);

console.log(w.getTemperature());
w.setPower(1500);
console.log("after setting the cooling power " + w.getTemperature());
w.coolASecond();

console.log("The temperature after one second is " + w.getTemperature());

const target = 0; 
const timeReq = w.calculateCoolingTime(target);
console.log("The cooling time is " + timeReq);