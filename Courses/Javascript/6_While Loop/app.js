// let count = 0;
// while (count < 10){
//     count++;
//     console.log(count)
// }

// const secret = "BabyHippo";

// let guess = prompt("Enter the secret code...")
// while (guess != secret){
//     guess = prompt("Try Again")
// }
// console.log("Congrats you got the secret!!")

let input = prompt("Say something")

while(true){
    input = prompt(input)
    if (input.toLowerCase() === "stop copying me") break;
}
console.log("Okay")