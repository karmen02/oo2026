class Calculator {
    // currently displayed in the panel
    protected panel: string = "";

    pressButton(b: string): void {
        if (b === "C") {
            // Clear the panel
            this.panel = "";
        } else if (b === "=") {
            // Evaluate standard math (+, -, *, /)
            try {
                this.panel = eval(this.panel || "0").toString();
            } catch (error) {
                this.panel = "Error";
            }
        } else if (b === "√") {
            // Square Root
            const num = Number(eval(this.panel || "0"));
            this.panel = Math.sqrt(num).toString();
        } else if (b === "x²") {
            //squared
            const num = Number(eval(this.panel || "0"));
            this.panel = (num * num).toString();
        } else if (b === "sin") {
            //sine (assumes radians)
            const num = Number(eval(this.panel || "0"));
            this.panel = Math.sin(num).toString();
        } else if (b === "cos") {
            //cosine (assumes radians)
            const num = Number(eval(this.panel || "0"));
            this.panel = Math.cos(num).toString();
        } else if (b === "tan") {
            //tangent (assumes radians)
            const num = Number(eval(this.panel || "0"));
            this.panel = Math.tan(num).toString();
        } else if (b === "π") {
            //pi
            this.panel += Math.PI.toString();
        } else {
            // Standard number or operator
            this.panel += b;
        }
    }

    getPanelContent(): string {
        return this.panel;
    }
}

export {
    Calculator
}