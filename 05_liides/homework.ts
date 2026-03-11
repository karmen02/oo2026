interface CalculatingFunction{
    calculate(x:number):number;

    inputUnit():string;

    outputUnit():string;
}

class JoulesToCal implements CalculatingFunction{
    calculate(J:number):number{
        return J/4.184; 
    }
    inputUnit():string{
        return "J";
    }
    outputUnit():string{
        return "cal";
    }
    
}

class CalToJoules implements CalculatingFunction{
    calculate(_cal:number):number{
        return _cal*4.184; 
    }
    inputUnit():string{
        return "cal";
    }
    outputUnit():string{
        return "J";
    }
}

class JoulesToKcal implements CalculatingFunction {
    calculate(J: number): number {
        // Formula: kcal = J / 4184
        return J / 4184; 
    }
    inputUnit(): string {
        return "J";
    }
    outputUnit(): string {
        return "kcal";
    }
}

class KcalToJoules implements CalculatingFunction {
    calculate(kcal: number): number {
        // Formula: J = kcal * 4184
        return kcal * 4184; 
    }
    inputUnit(): string {
        return "kcal";
    }
    outputUnit(): string {
        return "J";
    }
}