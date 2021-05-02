const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
let spans = document.querySelectorAll("h1 span");  // Note this is collection. Like array

// Lucky that lolors.length === spans.length :-)
// Usually we have to check for stuff like that

for (let i=0; i<colors.length; i++) {
   spans[i].style.color = colors[i];
}

// I couldn't let this go.  This works.
colors.forEach((span,index) => console.log(span, index))

// So the final geek solution is:
spans.forEach((span,index) => span.style.color = colors[index])

// The jackass programmer one line solution.
// Remember KISS.  Keep It Simple Stupid!
document.querySelectorAll("h1 span").forEach((s,i) => s.style.color = colors[i]);
