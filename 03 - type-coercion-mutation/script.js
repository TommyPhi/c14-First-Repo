let firstName = 'Tommy';
let age = 19;

age = 30;
firstName = "Timothy";
//console.log firstName and ge

// Type Coercion
let message = "My age is: " + age;
console.log(message);
console.log(typeof message);

//Arithmetic Operations & Type Coercion
let result = "10" - 5;
console.log(result, typeof result);

// String Conversion
let value = true;
value = String(value);
//alert(typeof value)

// Numeric Conversion
// alert("6"/"2");

let str = "123"
let num = Number(str);
// alert(num);

// NaN
let amount = Number("an arbitary value instead of a number");
// alert(amount)

//More Conversions
// alert(Number(true));
// alert(Number(false));
// alert(Boolean(1));

let shoes;

if(shoes) {
    alert("shoes evaluated as true");
} else {
    alert("shoes evaluated as false" + typeof shoes)
}
