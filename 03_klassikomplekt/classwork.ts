class Resistor{
    protected r:number; protected g;

    constructor(r:number, g:CanvasRenderingContext2D){
        this.r=r;
        this.g=g;
        this.draw();
    }

    draw(){
        //start drawing a new shape
        this.g.beginPath()
        //50 -x position (distance from the left of the canvas)
        //10-y position (distance from top to rectangle)
        // 100-width of the rectangle
        // 30 -  height of rectangle
        this.g.rect(50,10,100,30);
        this.g.stroke();
        this.g.fillText("" + this.r, 80,28);

    }
}