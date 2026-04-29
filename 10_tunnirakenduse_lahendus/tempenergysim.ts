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

// equal temp calc
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