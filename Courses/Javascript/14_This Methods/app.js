const cat = {
    breed: "Persian Cat",
    Age: 4,
    Hobbies: ["Playing", "Sleeping"],
    introduction(){
        return `My cat is a ${this.breed} and he is ${this.Age} years old`;
    }
}

console.log(cat.introduction());