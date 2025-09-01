// ---------- SetTimeout ----------
console.log("HELLO!")
setTimeout(() => {
   console.log("....Are you still there?") 
}, 3000);

console.log("GOODBYE!");

// ---------- SetInterval ----------
const id = setInterval(() => {
   console.log(Math.random())
}, 2000);

//clearInterval(id);