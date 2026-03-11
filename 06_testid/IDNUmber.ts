export class IDCode{
    constructor(protected code:string){}
    gender(){
        //this.code takes the first character of he personal code
        //parseint converts it to a nr
        //%2 divides by 2 (divisible by 2), return F
        //%2 not divisible return male
        return parseInt(this.code[0])%2===0? "F": "M";
    }
}
