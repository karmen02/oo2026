let message = "Hello, world!";
console.log(message);

//creating a variable for your name and age. This is the console print 

let firstname: string = "Karmen";
let age: number = 19;
console.log("My name is " + firstname + ". I am " + age + " years old.");

if (age<7){
    console.log("Free entry");
} else{
    if (age>=7 && age<=16){
        console.log("Buy a kids ticket")
        } 
    else {
        console.log("Buy an adult ticket")
    }
}
let symbols: string[] = []; // tühi array phm
for (let nr = 0; nr < age; nr++) {
    symbols.push("*");
}   

//console.log(symbols);
console.log(symbols.join(""));
