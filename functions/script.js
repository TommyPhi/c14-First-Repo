//basic named function

function add(a, b) {
    return a + b;
}

console.log(add(20, 32))

//callback function

// let sayHello = () => {
//     let name = prompt('What is your name?');
//     hello(name);
// }

// let hello = (name) => {
//     alert(`Hello, ${name}`)
// }

// sayHello();

//function expression is a function that is assigned to a variable or stored in a data structure

const multiply = function (a, b) {
    return a * b;
}

console.log(multiply(9, 5));

//arrow function

let divide = (a, b) => {
    return a / b;
}

console.log(divide(10, 2));

//invoked function

(function() {
    console.log("I am an invoked function")
})();