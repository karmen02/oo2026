var Polygon = /** @class */ (function () {
    function Polygon(x, y) {
        this.x = x;
        this.y = y;
    }
    //create a  new method that adds new points to the polygon
    Polygon.prototype.add = function (x, y) {
        this.x.push(x);
        this.y.push(y);
    };
    //this method is going to calculate the distance between two points
    Polygon.prototype.distance = function (x1, y1, x2, y2) {
        var a = x2 - x1;
        var b = y2 - y1;
        return Math.sqrt(a * a + b * b);
    };
    //perimeter - this method calculates the total length of the polygon
    Polygon.prototype.Perimeter = function () {
        var total = 0;
        //starting counting at 1 because we need the previous point
        //always need two points to measure one side
        //this.x.length keeps the loop going while i is smaller than the number of points
        for (var i = 1; i < this.x.length; i++) {
            total += this.distance(this.x[i - 1], //to find previous x point
            this.y[i - 1], //prev Y
            this.x[i], this.y[i]);
        }
        //add the distance from last point to first point
        // last x, last y, first x, first y
        total += this.distance(this.x[this.x.length - 1], this.y[this.y.length - 1], this.x[0], this.y[0]);
        return total;
        // x1y1 x2y2 - find 
    };
    Polygon.prototype.draw = function (g) {
        //if no points, stop the funct
        if (this.x.length === 0)
            return;
        //close...
        g.beginPath();
        g.moveTo(this.x[0], this.y[0]);
        for (var i = 1; i < this.x.length; i++) {
            g.lineTo(this.x[i], this.y[i]);
        }
        //moveTo already draws the first points
        //point 0 to point1
        g.lineTo(this.x[0], this.y[0]);
        g.stroke();
    };
    return Polygon;
}());
//this function's going to calculate the distance between two points
//formulas c = sqrt a2 +b2 ehk a2 + b2 =c2 
//let p1= new Polygon([50,30,40],[40,30,50]);
//console.log(p1);
