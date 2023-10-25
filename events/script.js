let number = document.getElementById('number');
let num = 0;
const increasebtn = document.getElementById('increase');
const decreasesbtn = document.getElementById('decrease');

function updateNumber() {
    number.textContent = num;
}

increasebtn.addEventListener('click', function() {
    num++;
    updateNumber();
})

decreasesbtn.addEventListener('click', function() {
    num--;
    updateNumber();
})

while(num<100) {
    num++;
    updateNumber();
}