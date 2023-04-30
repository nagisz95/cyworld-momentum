const body = document.body;
// const miniHpWrapper = document.querySelector(".miniHpWrapper")
// const outlineColor = ["#ff552e", "#ff9797", "#3E6CFF", "#1A3F0C", "#FFBC01", "#d47b30", "#ff8b2b", "#9323ff", "#0c3a4c"]
// const randomOutlineColor = outlineColor[Math.floor(Math.random() * outlineColor.length)];
const bgImg = ["bg1.png", "bg2.jpeg", "bg3.jpeg", "bg4.jpeg",]; 
const randomBgImg = bgImg[Math.floor(Math.random() * bgImg.length)];


function changeOutlineColor() {
    body.style.background = `url(../img/${randomBgImg}) center/cover no-repeat`;
    // miniHpWrapper.style.backgroundColor = `${randomOutlineColor}`;
}

changeOutlineColor();