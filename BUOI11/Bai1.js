const body = document.querySelector("body");
const buttoncolor = document.querySelector("#setcolor");
function randomColor() {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}

buttoncolor.onclick = () => {
    body.style.backgroundColor = randomColor();
}