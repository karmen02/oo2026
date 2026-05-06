class Shop {
    name: string;
    openH: number;
    openMin: number;
    closeH: number;
    closeMin: number;
    visits: number;

    constructor(name: string, openH: number, openMin: number, closeH: number, closeMin: number) {
        this.name = name;
        this.openH = openH;
        this.openMin = openMin;
        this.closeH = closeH;
        this.closeMin = closeMin;
        this.visits = 0;
    }

    isOpen(currentH: number, currentMin: number): boolean {
        let openTotal = (this.openH * 60) + this.openMin;
        let closeTotal = (this.closeH * 60) + this.closeMin;
        let currentTotal = (currentH * 60) + currentMin;

        if (openTotal < closeTotal) {
            // if time rn is bigger or equal to open time and rn time AND is smaller than close time its open
            if (currentTotal >= openTotal && currentTotal < closeTotal) {
                return true;
            } else {
                return false;
            }
        } else {
            if (currentTotal >= openTotal || currentTotal < closeTotal) {
                return true;
            } else {
                return false;
            }
        }
    }

    visit(): void {
        this.visits += 1;
    }
}

class ShopChain {
    name: string;
    shops: Shop[];

    constructor(name: string) {
        this.name = name;
        this.shops = [];
    }

    addShop(shop: Shop): void {
        this.shops.push(shop);
    }

    getOpenShops(h: number, min: number): Shop[] {
        let openShops: Shop[] = [];
        
        //ctrl through isopen function, if is then goes into new array
        for (let shop of this.shops) {
            if (shop.isOpen(h, min)) {
                openShops.push(shop);
            }
        }
        
        return openShops;
    }
    // begins on 0, then gets added to w every visit click
    getTotalVisits(): number {
        let total = 0;
        
        for (let shop of this.shops) {
            total += shop.visits;
        }
        
        return total;
    }
}