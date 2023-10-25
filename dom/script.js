// document.body.innerHTML='it is not sussy, its the DOM working with the browser!';

const clickme = document.getElementById('btn');
let heading = document.getElementById('heading');
const greet = ['hello', 'hi', 'hey'];

heading.textContent = 'Hello, dom!'

btn.addEventListener('click', () => {
    let rand = Math.floor(Math.random() * 3);
    heading.textContent = greet[rand];
})              