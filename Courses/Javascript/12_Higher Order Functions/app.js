// ---------- Accept other functions as arguments ----------
// function callTwice(func){
//     func();
//     func();
// }

// function laugh() {
//     console.log("HAHAHA");
// } 

// callTwice(laugh); // pass a function as an arg!
//"HAHAHA"
//"HAHAHA"

// ---------- Return a function ----------
function makeBetweenFunc(min, max){
    return function(num){
        return num > min && num < max;
    }
}

const isChild = makeBetweenFunc(0,18);
const isAdult = makeBetweenFunc(19,27);
console.log(isChild(1)); // True
console.log(isChild(19)); // False
console.log(isAdult(25)); // True
console.log(isAdult(30)); // False