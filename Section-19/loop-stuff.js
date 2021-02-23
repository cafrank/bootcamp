

for (let i=0; i<6; i++) {
    console.log(i);
}

for (let i=0; i<60; i+=5) {
    console.log(i);
}

const animals = [ 'lions', 'tigers', 'goats'];
for (let i=0; i<3; i++) {
    console.log(i, anamals[i]);
}

for (let i=0; i<anamals.length; i++) {
    console.log(i, anamals[i]);
}

for (let i=0; i<anamals.length; i++) {
    console.log(i, anamals[i]);
}

for (let a of anamals) {
    console.log(a);
}

let num = parseInt(prompt("Emter a number: "));
console.log(num);

const testScores = {
    jim: 44,
    bob: 43,
    tim: 55,
    bill: 46
};

for (let key in testScores) {
    console.log(key, testScores[key]);
}
