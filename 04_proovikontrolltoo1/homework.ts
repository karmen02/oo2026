class Diamond {
    // x and y represent the center point of the diamond
    constructor(protected x: number, protected y: number, protected width: number, protected height: number) {}

    // method to calculate the area of the diamond - d1 *d2 divided by 2
    calculateArea(): number {
        return (this.width * this.height) / 2;
    }

    // Method to calculate the perimeter using the Pythagorean theorem
    calculatePerimeter(): number {
        const a = this.width / 2;
        const b = this.height / 2;
        return Math.sqrt(a * a + b * b) * 4;
    }

    draw(g: CanvasRenderingContext2D): void {
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
    }
}