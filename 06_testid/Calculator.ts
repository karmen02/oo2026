class Calculator{
    //currently displayed in the panel
    protected panel:string="";

    pressButton(b:string):void{
        this.panel +=  b;
        if(b==="C"){
        this.panel = "0"
        }else{
        this.panel +=  b;
        }

    }
    getPanelContent(): string{
        return this.panel;

    }
}
export{
    Calculator
}