const body = document.body;
const bgImg = ["bg1.png", "bg2.jpeg", "bg3.jpeg", "bg4.jpeg",]; 
const randomBgImg = bgImg[Math.floor(Math.random() * bgImg.length)];


function changeBgImg() {
    body.style.background = `url(../img/${randomBgImg}) center/cover no-repeat`;
}

changeBgImg();