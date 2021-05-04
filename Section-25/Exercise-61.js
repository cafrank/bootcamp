// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');

// console.dir(form)        Play in the browser console to figure it out.
//  1. We need to clear out form action. form.action = null ??? NO!
//     e.preventDefault();
//  2. Ah, that's right onsubmit

const list = document.getElementById('list');

const handleSubmit = e => {
    console.log('SUBMIT');
    const li = document.createElement('li')
//  const qty = document.querySelector('form input#qty');  // This works
    const qty  = document.getElementById('qty');            // Faster
    const name = document.getElementById('product');

    li.innerText = `${name.value} ${qty.value}`
    list.appendChild(li)
    qty.value = null;
    name.value = null;
    e.preventDefault();
}

form.addEventListener('submit', handleSubmit);
// form.onsubmit = handleSubmit;      This also works.  Single handler

// ======================= Method 2 ===========================

// OR combined with an anonymous handler function.
// This prevents the handler from getting separated or used somewhere
// else, but when the handler gets too large this looks ugly
form.addEventListener('submit', e => {
    const li = document.createElement('li')
    const qty  = document.getElementById('qty');            // Faster
    const name = document.getElementById('product');
    li.innerText = `${name.value} ${qty.value}`
    list.appendChild(li)
    qty.value = name.value = null;  // Setting two variables at the same time to the same thing
    e.preventDefault();
});
