class MaterialAmount {
    mass: number;
    temperature: number;
    heatcapacity: number;
    //water: 4200, air: 1012, iron: 412 j/kgC

    constructor(mass:number, temperature: number, heatcapacity: number) {
        this.mass = mass;
        this.temperature = temperature;
        this.heatcapacity = heatcapacity;

    }

    //current temperature
    currentTemp():number{
        return this.temperature;
    }
    
    energychange(energy: number): void {
        // tempchange = Energy / (mass * heat cap)
        const tempchange = energy / (this.mass * this.heatcapacity);
        
        this.temperature += tempchange;
    }
    // Q = m*c*T
    //Q/T = m*c
    // m*c is heat cap of obj
    affect(): number {
        return this.mass * this.heatcapacity;
    }

}

let w = new MaterialAmount(3,20,4200);
let i = new MaterialAmount(10,20,412);

w.energychange(10000);
i.energychange(10000);
console.log("***********************************")
console.log(`Water temperature: ${w.currentTemp().toFixed(2)}°C`);
console.log(`Water temperature: ${i.currentTemp().toFixed(2)}°C`);

// neljanda osa jaoks
if (i.currentTemp() > w.currentTemp()) {
    //raualt tuhat maha, veele juurde
    i.energychange(-1000); 
    w.energychange(1000);  

    console.log(`Updated water temperature: ${w.currentTemp().toFixed(2)}°C and updated iron temperature: ${i.currentTemp().toFixed(2)}°C`)
   
}

class AirAmount extends MaterialAmount {
    length: number;
    width: number;
    height: number;

    constructor(length:number, width:number,height:number, temperature: number){
        const volume = length*width*height;
        
        const density = 1.23;
        const mass = volume * density;

        super(mass, temperature, 1012);

        this.length = length;
        this.width = width;
        this.height = height;

    }

}


//õhu testimine
let room = new AirAmount(5, 4, 3, 20);
console.log("***********************************")
console.log(`The air mass in the room: ${room.mass} kg`);
room.energychange(10000);
console.log(`Room temperature after adding 10000J of energy: ${room.currentTemp().toFixed(2)}°C`);


//vaja teha:
//1. funktsioon - materjalide list, arvutab lõpp temperatuuri kui lubatakse energiat vahetada
// nt sama temp ei saa vahetada energiat ehk siis oleks  =, muidu nt > või <
//
const materials = [w,i,room]
function equalTemp(materials: MaterialAmount[]): number {
    let totalThermalEnergy = 0;
    let totalAffect = 0;

    for (const material of materials) {
        const influence = material.affect(); // mass *spets kuumus
        
        // phm mitu materjali
        totalAffect += influence;
        totalThermalEnergy += influence * material.currentTemp();
    }

    // lõpp temp vist??
    const finalTemp = totalThermalEnergy / totalAffect;
    return finalTemp;
}

const finalTemp = equalTemp(materials);
console.log("***********************************")
console.log(`The FINAL temperatures are: ${finalTemp.toFixed(2)}°C`);