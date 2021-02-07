// Strings

let favAnimal = "dog";

// String index
let anaimal = 'Elephant';

animal.length;

// anumal[0] == 'E'
// anumal[99] == undefined

let firstName = 'River';
let lastName = 'Phoenix';
let fullName = firstName + lastName;

typeof fullName;    // "string"

let result = 1 + fullName;
// 1RiverPhoenix
typeof result;    // "string"

// String methods vs properties
let yell = result.toUpperCase();

yell.trim();


// String with atguments
yell.indexOf('V');
yell.indexOf('z');      // -1

let nums = '012345789'
nums.slice(2);
// '2345789'

nums.slice(-2);
// '89'

nums.replace('45', 'XX');
// '0123XX789'

nums.repeat(10);
// '0123456789012345.....'

