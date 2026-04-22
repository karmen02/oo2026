"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
        // currently displayed in the panel
        this.panel = "";
    }
    Calculator.prototype.pressButton = function (b) {
        if (b === "C") {
            // Clear the panel
            this.panel = "";
        }
        else if (b === "=") {
            // Evaluate standard math (+, -, *, /)
            try {
                this.panel = eval(this.panel || "0").toString();
            }
            catch (error) {
                this.panel = "Error";
            }
        }
        else if (b === "√") {
            // Square Root
            var num = Number(eval(this.panel || "0"));
            this.panel = Math.sqrt(num).toString();
        }
        else if (b === "x²") {
            //squared
            var num = Number(eval(this.panel || "0"));
            this.panel = (num * num).toString();
        }
        else if (b === "sin") {
            //sine (assumes radians)
            var num = Number(eval(this.panel || "0"));
            this.panel = Math.sin(num).toString();
        }
        else if (b === "cos") {
            //cosine (assumes radians)
            var num = Number(eval(this.panel || "0"));
            this.panel = Math.cos(num).toString();
        }
        else if (b === "tan") {
            //tangent (assumes radians)
            var num = Number(eval(this.panel || "0"));
            this.panel = Math.tan(num).toString();
        }
        else if (b === "π") {
            //pi
            this.panel += Math.PI.toString();
        }
        else {
            // Standard number or operator
            this.panel += b;
        }
    };
    Calculator.prototype.getPanelContent = function () {
        return this.panel;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
