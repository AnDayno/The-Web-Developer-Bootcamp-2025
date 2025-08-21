// function singSong() {
//     console.log("DO");
//     console.log("RE");
//     console.log("MI");
// }

// singSong();

// ---------- Functions(Argument) ----------
// function greet(firstName){
//     console.log(`Hey there, ${firstName}!`);
// }

// greet(Elvis);

// ---------- Functions(Multiple Argument) ----------
// function greet(firstName, lastName){
//     console.log(`Hey there, ${firstName} ${lastName[0]}.!`);
// }

// greet("Elvis", "Presly");

// function repeat(str, num) {
//     let result = '';
// 	for (let i = 0; i < num; i++) {
//         result += str;
// 	}
//     console.log(result);
// }

// repeat("Hi", 9);

// ---------- Functions(Return) ----------

function add(x,y) {
    if (typeof x !== 'number' || typeof y !== 'number'){
        return false;
    }
    return x + y;
}

let math = add(6,7);
console.log(math);