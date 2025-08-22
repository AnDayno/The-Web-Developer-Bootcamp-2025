// ---------- Function Scope ----------
// msg is scoped to the helpMe function
// function helpMe(){
//     let msg = 'Im on fire!';
//     msg; // 'I'm on fire!'
// }

// msg; //NOT DEFINED!

// ---------- Block Scope ----------
// PI & circ are scoped to the BLOCK
// let radius = 8

// if (radius > 0){
//     const PI = 3.14;
//     let circ = 2 * PI * radius
// } // Inside the curly braces are called blocks (except on function)

// console.log(radius); //8
// console.log(PI); //NOT DEFINED
// console.log(circ); //NOT DEFINED

// ---------- Lexical Scope ----------
// An inner function nested inside of some parent function has access to the scope
// or to the variable to find in the scope of that outer function

// function outer() {
//     let hero = "Black Panther";

//     function inner() {
//         let cryForHelp = `${hero}, please save me!`;
//         console.log(cryForHelp);
//     }
//     inner();
// }
// outer(); // "Black Panther, please save me!"