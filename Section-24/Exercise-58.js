let div = document.getElementById("container");

for (let i=0; i<100; i++) {
    let button = document.createElement("button");
    button.innerText = 'b'+i;
    div.appendChild(button);
}
