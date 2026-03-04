var Diamond = /** @class */ (function () {
    // x and y represent the center point of the diamond
    function Diamond(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    // method to calculate the area of the diamond - d1 *d2 divided by 2
    Diamond.prototype.calculateArea = function () {
        return (this.width * this.height) / 2;
    };
    // Method to calculate the perimeter using the Pythagorean theorem
    Diamond.prototype.calculatePerimeter = function () {
        var a = this.width / 2;
        var b = this.height / 2;
        return Math.sqrt(a * a + b * b) * 4;
    };
    Diamond.prototype.draw = function (g) {
        g.beginPath();
        // moving to the top point and then drawing a line towards the right point
        g.moveTo(this.x, this.y - this.height / 2);
        g.lineTo(this.x + this.width / 2, this.y);
        // lines to bottom and left points
        g.lineTo(this.x, this.y + this.height / 2);
        g.lineTo(this.x - this.width / 2, this.y);
        //closing at the top point
        g.closePath();
        g.stroke();
        g.fillText("Area: " + this.calculateArea(), this.x - 25, this.y + 5);
    };
    return Diamond;
}());
