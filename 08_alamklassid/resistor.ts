//Abstract class or Parent class
abstract class AbstractResistor{
    //This function must be created in child classes
    abstract getResitance():number;

    getCurrent(u:number):number{
        return u/this.getResitance();
    }
}

class Resistor extends AbstractResistor{

    r: number;

    constructor(r:number){
        super();
        this.r=r;
    }

    getResitance(): number {
        return this.r;
    }
}

let resistor1=new Resistor(220);
console.log("The resistance value of resistor 01: " +resistor1.getResitance());

class Switch extends AbstractResistor{
    //Default state is SWITCH is off. 
    on:boolean=false;

    setOn(state:boolean){
        this.on=state;
    }

   // getResitance(): number {
   //     if(this.on){
   //         return 0;
   //     }
   //     else{
   //         return 1000000000;
   //     }
   // }


    getResitance(): number {
        return(this.on ? 0:1000000000);
    }

    getCurrent(u: number): number {
        if (u>0){
            if(this.on){
                throw new Error("Short Circuit");
            }
        }
        return super.getCurrent(u);
    }
}
//Function that takes any AbstractResistor and prints its resitance
function printResistance(r:AbstractResistor){
    console.log(r.getResitance());
}

let s1=new Switch();
console.log("The initial resistance value when it is off" + s1.getResitance());
s1.setOn(true);
console.log("The resistance value when the switch is on: " +s1.getResitance());

try{
    console.log(s1.getCurrent(5));
} catch (e){
    console.log("Caught error:", (e as Error).message);
}

//console.log(s1.getCurrent(5));
//Current =u/resitance value
//current=5/0=infinite
s1.setOn(false);
//current=5/100000000=0.00000000019(5e-9)
console.log(s1.getCurrent(5));
printResistance(s1);


abstract class MultpleConnection extends AbstractResistor{
    resistors: AbstractResistor[]=[]

    addResistor(r:AbstractResistor){
        this.resistors.push(r);
    }
}
//This calss should finally return the total value of the resitars in the connection
class SeriesConnection extends MultpleConnection{
    getResitance(): number {
        let totalResistance:number=0;

        for(let resistor of this.resistors){
            //get the resitance value of each resistor and add to the total
            totalResistance += resistor.getResitance()
        }

        return totalResistance;

    }
}

class ParallelConnection extends MultpleConnection{
    getResitance(): number {
        let inverseSum: number=0;

        for(let resistor of this.resistors){
            inverseSum+=1/resistor.getResitance();
        }
        return 1/inverseSum;
    }
}

let p:ParallelConnection=new ParallelConnection();
p.addResistor(new Resistor(220));
p.addResistor(new Resistor(220));
console.log("Resistance of parallel connection" +p.getResitance())


let s:SeriesConnection=new SeriesConnection();
s.addResistor(new Resistor(220));
s.addResistor(new Resistor(220));
console.log("Resistance of series connection " +s.getResitance() +"ohms")