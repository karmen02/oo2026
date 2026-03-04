interface CalculatingFunction{
    //x võib olla interfaceist väljas muu nimi. nt cm jne
    calculate(x:number):number;

    inputUnit():string;

    outputUnit():string;
}

class CmToIn implements CalculatingFunction{
    calculate(cm:number):number{
        return cm/2.54; 
    }
    inputUnit():string{
        return "cm";
    }
    outputUnit():string{
        return "in";
    }
    
}