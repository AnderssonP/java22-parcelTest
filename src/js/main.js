
const img = document.createElement('img');

const imgUrl = new URL('../img/bild.jpg', import.meta.url)
img.src = imgUrl.href;

document.body.append(img);

