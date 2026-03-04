interface Adder{
    //take a number and add smthing. Void=ei tagasta midagi
    add(nr:number):void;
// return current total
    getSum():number;
}

class SimpleAdder implements Adder{
    protected sum:number=0;
    add(nr:number):void{
        this.sum+=nr;
    }
    getSum():number{
        return this.sum
    }
}

let adder1:Adder=new SimpleAdder()
adder1.add(2);
adder1.add(4);
adder1.add(6);
console.log(adder1.getSum());

//doesnt follow interface
class CharCounter{
    //the constuctor recieves an adder object and stores inside the class
    constructor(protected adder:Adder){}
//how many characters
    addWordCharacters(word:string):void{
        this.adder.add(word.length);
    }
    //total character count
    getCharcterCount(){
        return this.adder.getSum();
    }
}
let counter1:CharCounter=new CharCounter(adder1);
counter1.addWordCharacters("mingitohuvapohu");
counter1.addWordCharacters("torujürivaimuvaesus");
console.log(counter1.getCharcterCount());