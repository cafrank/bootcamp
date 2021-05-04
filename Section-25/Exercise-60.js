const handleHay = e => { console.log('hello') }     // Anon function expression assignment
function handleBye(e)  {                            // Oldschool function definition
    console.log('goodbye')
}

let hay = document.getElementById("hello");
let bye = document.getElementById("goodbye");

hay.addEventListener('click', handleHay)
bye.addEventListener('click', handleBye) 

// Geek shortcut. Harder to follow
// document.getElementById("hello").addEventListener('click', e => console.log('hello'))