//YOU CODE GOES HERE:
let items = document.querySelectorAll("ul li");  // Note this is collection. Like array

for (let i=0; i<items.length; i++) {
    items[i].classList.toggle('highlight');
}
