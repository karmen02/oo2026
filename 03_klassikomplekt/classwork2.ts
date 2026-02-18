class Resistor1{
    protected width:number; protected height:number=30;

    constructor(protected r:number,
        protected g:CanvasRenderingContext2D,
        //x position where the resistor is goign to begin
        protected startx:number,
        //x position where the resistor is going to end
        protected endx:number,
        //how far down the screen we're going to draw the resistor
        protected y:number,
    ){
        this.width=this.endx - this.startx;
        this.draw();
    }
    draw(){ //draw the left wire
        this.g.beginPath();
        this.g.moveTo(this.startx, this.y);
        this.g.lineTo(this.startx+this.width/4, this.y)
        this.g.stroke();

        // draw the rectangle
        // x,y,height and width
        const bodyX= this.startx + this.width /4;
        const bodyY= this.y-this.height/2;
        const bodyW= this.width / 2;
        const bodyH= this.height;
        this.g.beginPath(); 
        this.g.rect(bodyX, bodyY, bodyW, bodyH);
        this.g.stroke();

        // draw the right wire
        this.g.beginPath();
        this.g.moveTo(this.startx+this.width*3/4, this.y)
        this.g.lineTo(this.endx, this.y);
        this.g.stroke();
        this.g.fillText(this.r+"ohms", bodyX+8,this.y+5);
        
    }
    
}