var Resistor2 = /** @class */ (function () {
    function Resistor2(r, g, 
    //x position where the resistor is goign to begin
    startx, 
    //x position where the resistor is going to end
    endx, 
    //how far down the screen we're going to draw the resistor
    y) {
        this.r = r;
        this.g = g;
        this.startx = startx;
        this.endx = endx;
        this.y = y;
        this.height = 30;
        this.width = this.endx - this.startx;
        this.draw();
    }
    Resistor2.prototype.draw = function () {
        // clear the canvas area to avoid overlapping redraws
        this.g.clearRect(this.startx, this.y - this.height / 2, this.width, this.height);
        //this.g.clearRect(0, 0, this.g.canvas.width, this.g.canvas.height);
        this.g.beginPath();
        this.g.moveTo(this.startx, this.y);
        this.g.lineTo(this.startx + this.width / 4, this.y);
        this.g.stroke();
        // draw the rectangle
        // x,y,height and width
        var bodyX = this.startx + this.width / 4;
        var bodyY = this.y - this.height / 2;
        var bodyW = this.width / 2;
        var bodyH = this.height;
        this.g.beginPath();
        this.g.rect(bodyX, bodyY, bodyW, bodyH);
        this.g.stroke();
        // draw the right wire
        this.g.beginPath();
        this.g.moveTo(this.startx + this.width * 3 / 4, this.y);
        this.g.lineTo(this.endx, this.y);
        this.g.stroke();
        this.g.fillText(this.r + " ohms", bodyX + 8, this.y + 5);
    };
    //change the resistors resistance value and redraw it
    Resistor2.prototype.setR = function (r) {
        this.r = r;
        this.draw();
    };
    Resistor2.prototype.getR = function () {
        return this.r;
    };
    return Resistor2;
}());
