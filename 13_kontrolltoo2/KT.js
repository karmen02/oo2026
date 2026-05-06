var Shop = /** @class */ (function () {
    function Shop(name, openH, openMin, closeH, closeMin) {
        this.name = name;
        this.openH = openH;
        this.openMin = openMin;
        this.closeH = closeH;
        this.closeMin = closeMin;
        this.visits = 0;
    }
    Shop.prototype.isOpen = function (currentH, currentMin) {
        var openTotal = (this.openH * 60) + this.openMin;
        var closeTotal = (this.closeH * 60) + this.closeMin;
        var currentTotal = (currentH * 60) + currentMin;
        if (openTotal < closeTotal) {
            //if current is bigger than or equal to opentotal and currentotal, and closetotal is bigger, shops open
            if (currentTotal >= openTotal && currentTotal < closeTotal) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            if (currentTotal >= openTotal || currentTotal < closeTotal) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    Shop.prototype.visit = function () {
        this.visits += 1;
    };
    return Shop;
}());
var ShopChain = /** @class */ (function () {
    function ShopChain(name) {
        this.name = name;
        this.shops = [];
    }
    ShopChain.prototype.addShop = function (shop) {
        this.shops.push(shop);
    };
    ShopChain.prototype.getOpenShops = function (h, min) {
        var openShops = [];
        //ctrl through isopen function, if is then goes into new array
        for (var _i = 0, _a = this.shops; _i < _a.length; _i++) {
            var shop = _a[_i];
            if (shop.isOpen(h, min)) {
                openShops.push(shop);
            }
        }
        return openShops;
    };
    // begins on 0, then gets added to w every visit click
    ShopChain.prototype.getTotalVisits = function () {
        var total = 0;
        for (var _i = 0, _a = this.shops; _i < _a.length; _i++) {
            var shop = _a[_i];
            total += shop.visits;
        }
        return total;
    };
    return ShopChain;
}());
