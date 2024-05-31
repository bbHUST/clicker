const button = document.getElementById('myButton');
const message = document.getElementById('message');
const body = document.body;

button.addEventListener('click', () => {
    body.style.backgroundColor = 'lightpink';
    body.style.backgroundImage = 'url("https://static.vecteezy.com/system/resources/thumbnails/020/894/680/original/falling-rose-petals-in-4k-ultra-hd-rose-petals-for-valentine-and-wedding-background-free-video.jpg")';
    button.style.display = 'none';
    message.style.display = 'block';
});
