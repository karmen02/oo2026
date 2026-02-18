//Two different bank accounts into which money can be deposited and withdrawn.
//Class for bank accounts to keep them private. 
var BankAccount = /** @class */ (function () {
    function BankAccount(owner, balance, currency) {
        if (currency === void 0) { currency = "EUR"; }
        this.owner = owner;
        this.balance = balance;
        this.currency = currency;
    }
    //creating a deposit. Can only deposit if sum is bigger than 0.
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(this.owner + " sisestas kontole " + amount + this.currency + ".");
        }
    };
    //withdrawal. If less money than on account, no withdrawal happens and the user is instead met with an error.
    BankAccount.prototype.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(this.owner + "võttis kontolt välja" + amount + this.currency + ". Uus konto summa on " + this.balance + this.currency + ".");
        }
        else {
            console.log("Kontol pole piisavalt vabu vahendeid. Palun proovi uuesti.");
        }
    };
    //Balance
    BankAccount.prototype.showBalance = function () {
        console.log("Konto omanik on " + this.owner + ". Kontojääk on " + this.balance.toFixed(2) + this.currency + ".");
    };
    return BankAccount;
}());
//Creating objects
var siimAcc = new BankAccount("Siim", 700);
var MiiaAcc = new BankAccount("Miia", 2400);
//Depositing, withdrawing and showing balances for both accounts.
siimAcc.deposit(50);
siimAcc.withdraw(850);
siimAcc.showBalance();
console.log("**********");
MiiaAcc.withdraw(175);
MiiaAcc.showBalance();
MiiaAcc.deposit(10);
MiiaAcc.showBalance();
