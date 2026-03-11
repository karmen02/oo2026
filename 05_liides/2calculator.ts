interface CalculatingFunction{
    //x võib olla interfaceist väljas muu nimi. nt cm jne
    calculate(x:number):number;

    inputUnit():string;

    outputUnit():string;
}

class CentiToInches implements CalculatingFunction{
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

class InchesToCm implements CalculatingFunction{
    calculate(inch:number):number{
        return inch*2.54; 
    }
    inputUnit():string{
        return "in";
    }
    outputUnit():string{
        return "cm";
    }
}