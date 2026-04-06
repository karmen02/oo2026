var Aquarium = /** @class */ (function () {
    function Aquarium(length, width, height, g) {
        this.length = length;
        this.width = width;
        this.height = height;
        this.water = 0;
        this.g = g;
        this.draw();
    }
    //calculating volume of aquarium
    Aquarium.prototype.volume = function () {
        return (this.length * this.width * this.height) / 1000;
    };
    //current amount of wate rin the aquarium
    Aquarium.prototype.currentWater = function () {
        return this.water;
    };
    //adding water. if theres a negative number, the user cannot add it. Drawing the new added water.
    Aquarium.prototype.addWater = function (amount) {
        if (amount <= 0)
            return "You cannot add a negative amount of water!";
        var overflow = (this.water + amount) - this.volume();
        this.water = Math.min(this.water + amount, this.volume());
        this.draw();
        if (overflow > 0) {
            return "There's more water than the aquarium can fit! The volume has been adjusted to the maximum volume. The overflow was ".concat(overflow.toFixed(2), "l");
        }
        return "Added ".concat(amount, "l of water");
    };
    // removing water. If negative number, the user cannot remove it. Drawing the new volume.
    Aquarium.prototype.removeWater = function (amount) {
        if (amount <= 0)
            return "You cannot remove a negative amount of water!";
        var missing = amount - this.water;
        this.water = Math.max(0, this.water - amount);
        this.draw();
        if (missing > 0) {
            return "You tried removing more water than the volume, thus the aquarium is now empty.";
        }
        return "Removed ".concat(amount, " amount of water");
    };
    //drawing the shape
    Aquarium.prototype.draw = function () {
        this.g.clearRect(0, 0, 400, 300);
        var startX = 50;
        var startY = 50;
        var drawWidth = 150;
        var drawHeight = 150;
        var fill = this.water / this.volume();
        var waterHeight = drawHeight * fill;
        var waterStartY = startY + (drawHeight - waterHeight);
        this.g.beginPath();
        this.g.rect(startX, waterStartY, drawWidth, waterHeight);
        this.g.fillStyle = "lightblue";
        this.g.fill();
        this.g.beginPath();
        this.g.rect(startX, startY, drawWidth, drawHeight);
        this.g.strokeStyle = "black";
        this.g.lineWidth = 2;
        this.g.stroke();
        // Text styling and the text itself to display current volume and max volume.
        this.g.fillStyle = "black";
        this.g.font = "16px Arial";
        this.g.fillText("".concat(this.water.toFixed(1), "l / ").concat(this.volume().toFixed(1), "l"), startX, startY - 10);
    };
    return Aquarium;
}());
