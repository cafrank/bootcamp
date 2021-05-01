const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
let spans = document.querySelectorAll("h1 span");  // Note this is collection. Like array

// Lucky that lolors.length === spans.length :-)
// Usually we have to check for stuff like that

for (let i=0; i<colors.length; i++) {
   spans[i].style.color = colors[i];
}
