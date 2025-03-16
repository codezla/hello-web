console.log('Hello World!');

const button = document.querySelector('button');
const output = document.querySelector('.output');

button.addEventListener('click', function() {
    output.innerHTML = 'Оу, ты нажал на кнопку! 👍';
});