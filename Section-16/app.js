7 == '7';    // true.        Does type coersion
7 === '7';   // false.     Not the same type.  Strict equality
// null == indefined;  // true
0 == false          // true


console.log('Hello');
console.warn('Hello');
console.error('Hello');

let userInput = prompt("Please enter a number");
let myNumber = parseInt(userInput);

if (myNumber > 100) {
    console.error('Big number', myNumber);
} else if (myNumber > 50)  {
    console.warn('Number too small try', 100 + Math.floor(Math.random()*100));
} else {
    console.error('Number way too small try', 100 + Math.floor(Math.random()*100));
}


