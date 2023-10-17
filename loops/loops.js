//Array of zoo animals
let animals = ["Tiger", "Gorilla", "Giraffe", "Panda"];

for(let i=0; i<animals.length; i++) {
    console.log(animals[i]);
}

for (let i=0; i<=4; i++) {
    console.log(i);
}

//Array of farm

let farm = ['cow', 'pig', 'chicken', 'horse', 'goat'];

let farmLength = farm.length;

for(let i = 0; i < farmLength; i++) {
    if (farm[i].charAt(0) === 'c' || farm[i].charAt(0) === 'o') {
        console.log(`${farm[i]} starts with a C or an O`)
    } else {
        console.log(`${farm[i]} does not start with a C or an O`)
    }
}