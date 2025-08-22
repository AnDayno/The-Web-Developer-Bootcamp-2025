const myMath = {
    PI: 3.14159,
    add(x, y){
        return x + y;
    },
    square(num){
        return num * num;
    },
    cube(num){
        return num ** 3;
    }
}

console.log(myMath.PI);
console.log(myMath.add(5,9));
console.log(myMath.square(9));
console.log(myMath.cube(20));