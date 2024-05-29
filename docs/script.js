const button = document.getElementById('myButton');
const message = document.getElementById('message');

button.addEventListener('click', () => {
    message.textContent = 'I love you';
    message.style.display = 'block';
    button.style.display = 'none';
});