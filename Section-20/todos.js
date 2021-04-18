
const cmdPrompt = 'Enter command: list, add, delete, or quit';

for (let cmd=prompt(cmdPrompt); cmd != 'quit'; cmd=prompt(cmdPrompt) ) {
    console.log('You typed::', cmd);
}

// It is nice to get exact mesages from stake holders, and 
// make constants that cn be quickly reviewed by the team.

const cmdPrompt = 'Enter command: list, add, delete, or quit';
const delPrompt = 'Enter number of todo to delete';
const newPrompt = 'Enter new todo';

// Pick the best data structure to hold the data.
// The name makes its purpouse obvious.
// let todosData = ['Review code', 'REad the entire document'];

// Functions, functions, functions !!!
function doList() {
    for(let i=0; i<todosData.length; i++) {
        console.log(`${i}: ${todosData[i]}...`);
    }
}

function doDelete() {
    let delTodo = cmd=prompt(delPrompt);
    todosData.splice(delTodo, 1);
}

// Compact, elegant, but might be hard to read !!!
for (let cmd=prompt(cmdPrompt); cmd != 'quit'; cmd=prompt(cmdPrompt) ) {
    if (cmd.toLowerCase() == 'list') {
        doList();
    } else if (cmd.toLowerCase() == 'delete') {
        doList();
        doDelete();
    } else if (cmd.toLowerCase() == 'add') {
        let newTodo = cmd=prompt(newPrompt);
        todosData.push(newTodo);
    } else {
        console.log('Invalid command:', cmd);
    }
}

// cmd=prompt(cmdPrompt);
// while (cmd != 'quit') {
//     if (cmd.toLowerCase() == 'list') {
//         // console.log('LIST:', cmd);
//         for (let i=0; i<todosData.length; i++) {
//             console.log(`${i}: ${todosData[i]}`);
//         }
//     } else if (cmd.toLowerCase() == 'delete') {
//         // console.log('DELETE:', cmd);
//         for (let i=0; i<todosData.length; i++) {  // Same loop above. Fonction?
//             console.log(`${i}: ${todosData[i]}`);
//         }
//         let delIndex = cmd=prompt(delPrompt);
//         todosData.splice(delIndex, 1);
//     } else if (cmd.toLowerCase() == 'new') {
//         let newTodo = cmd=prompt(newPrompt);
//         todosData.push(newTodo);
//         // console.log('NEW:', cmd);
//     } else {
//         console.log('Invlid command:', cmd);
//     }
//     cmd=prompt(cmdPrompt)
// }

// Dense for loop 
for (let isCold=true;      isCold;     isCold=false) {
    console.log('Heating up');
}

// The same thing done with more lines in a while loop

let isCold = true;
let temp   = 40;        // This is cold
isCold = (temp < 70)

while(temp < 70) {
    console.log('Heating up');
    isCold = false;
}
