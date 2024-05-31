const button = document.getElementById('myButton');
const message = document.getElementById('message');

button.addEventListener('click', () => {
    message.textContent = 'Hey beautiful';
    message.style.display = 'block';
    button.style.display = 'none';
});
