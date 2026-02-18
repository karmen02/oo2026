//Two different bank accounts into which money can be deposited and withdrawn.
//Class for bank accounts to keep them private. 
class BankAccount {
    constructor(private owner:string, private balance: number, private currency: string = "EUR") {}
     
    //creating a deposit. Can only deposit if sum is bigger than 0.
    deposit(amount: number): void {
        if (amount > 0 ){
            this.balance += amount;
            console.log(this.owner + " sisestas kontole " + amount + " " + this.currency + ".");
        }
    }
    //withdrawal. If less money than on account, no withdrawal happens and the user is instead met with an error.
    withdraw(amount:number): void {
        if (amount <= this.balance) {
            this.balance -=amount;
            console.log(this.owner + " võttis kontolt välja " + amount + " " + this.currency + ". Uus konto summa on " + this.balance.toFixed(2) + " " + this.currency + "." );
        }
        else {
            console.log("Kontol pole piisavalt vabu vahendeid. Palun proovi uuesti.");
        }
    }
    //Balance
    showBalance():void {
        console.log("Konto omanik on " + this.owner + ". Kontojääk on " + this.balance.toFixed(2) + " " + this.currency + ".");
    }
}
//Creating objects
let siimAcc = new BankAccount("Siim", 700);
let MiiaAcc = new BankAccount("Miia", 2400);

//Depositing, withdrawing and showing balances for both accounts.
siimAcc.deposit(50);
siimAcc.withdraw(850);
siimAcc.showBalance();

console.log("**********")

MiiaAcc.withdraw(175);
MiiaAcc.showBalance();
MiiaAcc.deposit(10);
MiiaAcc.showBalance();