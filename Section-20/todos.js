
const cmdPrompt = 'Enter command: list, add, delete, or quit';

for (let cmd=prompt(cmdPrompt); cmd != 'quit'; cmd=prompt(cmdPrompt) ) {
    console.log('You typed::', cmd);
}

// It is nice to get exact mesages from stake holders, and 
// make constants that cn be quickly reviewed by the team.
// let cmdPrompt = 'Enter command: list, add, delete, or quit';
// let delPrompt = 'Enter number of todo to delete';
// let newPrompt = 'Enter new todo';

// Pick the best data structure to hold the data.
// The name makes its purpouse obvious.
// let todosData = ['Review code', 'REad the entire document'];

// Compact, elegant, but might be hard to read !!!
// for (let cmd=prompt(cmdPrompt); cmd != 'quit'; cmd=prompt(cmdPrompt) ) {
//     console.log('You typed::', cmd);
// }

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
// for (let isCold=true;      isCold;     isCold=false) {
//     console.log('Heating up');
// }

// The same thing done with more lines in a while loop
// let isCold = true;
// while(isCold) {
//     console.log('Heating up');
//     isCold = false;
// }
