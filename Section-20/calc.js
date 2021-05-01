
// Version 1
// =======================
// Prompt num1:        5
// Prompt num2:       10
// Prompt Operation: add
// Print out          15

// Version 2
// =======================
//
// Prompt num1:        5
// Prompt num2:       10
// Prompt Operation: add
// Print out          15
// Start over at line 13 unless the command is quit

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let number1String = prompt ('Enter first number');
let number2String = prompt ('Enter second number');
let operation = prompt ('Enter operation');
//console.log(`You entered ${number1} ${number2} and ${operation}`);

let number1 = parseInt(number1String);
let number2 = Number  (number2String);
console.log(  multiply(number1, number2)  );

// Return the function
// How










// ========================== Testing ============================
function unitTest() {
    console.log(add(5,10));         // 15
    console.log(multiply(3,5));     // 15
    console.log(subtract(10,5));    // 5
    console.log(divide(10,5));      // 2
}