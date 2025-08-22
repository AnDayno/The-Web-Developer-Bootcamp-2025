// ---------- Accept other functions as arguments ----------
function callTwice(func){
    func();
    func();
}

function laugh() {
    console.log("HAHAHA");
} 

callTwice(laugh); // pass a function as an arg!
//"HAHAHA"
//"HAHAHA"