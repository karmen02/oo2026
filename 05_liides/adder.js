var SimpleAdder = /** @class */ (function () {
    function SimpleAdder() {
        this.sum = 0;
    }
    SimpleAdder.prototype.add = function (nr) {
        this.sum += nr;
    };
    SimpleAdder.prototype.getSum = function () {
        return this.sum;
    };
    return SimpleAdder;
}());
var adder1 = new SimpleAdder();
adder1.add(2);
adder1.add(4);
adder1.add(6);
console.log(adder1.getSum());
//doesnt follow interface
var CharCounter = /** @class */ (function () {
    //the constuctor recieves an adder object and stores inside the class
    function CharCounter(adder) {
        this.adder = adder;
    }
    //how many characters
    CharCounter.prototype.addWordCharacters = function (word) {
        this.adder.add(word.length);
    };
    //total character count
    CharCounter.prototype.getCharcterCount = function () {
        return this.adder.getSum();
    };
    return CharCounter;
}());
var counter1 = new CharCounter(adder1);
counter1.addWordCharacters("mingitohuvapohu");
counter1.addWordCharacters("torujürivaimuvaesus");
console.log(counter1.getCharcterCount());
