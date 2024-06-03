const button = document.getElementById('myButton');
const message = document.getElementById('message');
const body = document.body;
const soundEffect = document.getElementById('sound-effect');

button.addEventListener('click', () => {
    body.style.backgroundColor = 'lightpink';
    body.style.backgroundImage = 'url("https://th.bing.com/th/id/OIP.3M-fwKLTBxn0boIyPlVE8wHaIX?pid=ImgDet&w=191&h=216&c=7")';
    button.style.display = 'none';
    message.style.display = 'block';
    soundEffect.play();
});
