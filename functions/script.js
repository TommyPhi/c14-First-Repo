// //basic named function

// function add(a, b) {
//     return a + b;
// }

// console.log(add(20, 32))

// //callback function

// // let sayHello = () => {
// //     let name = prompt('What is your name?');
// //     hello(name);
// // }

// // let hello = (name) => {
// //     alert(`Hello, ${name}`)
// // }

// // sayHello();

// //function expression is a function that is assigned to a variable or stored in a data structure

// const multiply = function (a, b) {
//     return a * b;
// }

// console.log(multiply(9, 5));

// //arrow function

// let divide = (a, b) => {
//     return a / b;
// }

// console.log(divide(10, 2));

// //invoked function

// (function() {
//     console.log("I am an invoked function")
// })();

//Created function adder which takes 3 parameters
// function adder(x, y, z) {
//     return x + y + z;
// }

// function multiply(x, y, z) {
//     return x * y * z;
// }

// console.log(`5 * 9 * 10 is ${multiply(5, 9, 10)}`)


//Create a function called "isString" that takes in 3 arguments (x, y, z)
// function isString(x, y, z) {
//     if(typeof x === 'string' && typeof y === 'string' && typeof z === 'string') {
//         console.log('All parameters are strings!')
//     } else {
//         console.log('Wait, there is an imposter...')
//     }
// }

// isString('hello', 2, '!');
// isString('hello', 'world', '!');
// isString('hello', 'osiel', true);

//Vowel checker function
// let numOfVowels = 0;
// function vowelChecker(x) {
//     for(let i=0; i < x.length; i++) {
//         if(x.toLowerCase().charAt(i) === 'a' || x.toLowerCase().charAt(i) === 'e' || x.toLowerCase().charAt(i) === 'i' || x.toLowerCase().charAt(i) === 'o' || x.toLowerCase().charAt(i) === 'u') {
//             numOfVowels++;
//         }
//     }
//     console.log(`${x} has ${numOfVowels} vowels!`)
// }

// vowelChecker('Adieu');

//Filter Method: Filters out odd numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterEvenNumbers(numbers) {
    return numbers.filter(function (number) {
        return number % 2 === 0;
    });
}

console.log(filterEvenNumbers(numbers));