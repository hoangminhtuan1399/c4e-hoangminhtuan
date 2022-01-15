const firstNum = document.querySelector(".firstNum");
const secondNum = document.querySelector(".secondNum");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiple = document.querySelector(".multiple");
const divide = document.querySelector(".divide");
const result = document.querySelector(".result");

add.onclick = () => {
    result.value = parseFloat(firstNum.value) + parseFloat(secondNum.value);
}
subtract.onclick = () => {
    result.value = parseFloat(firstNum.value) - parseFloat(secondNum.value);
}
multiple.onclick = () => {
    result.value = parseFloat(firstNum.value) * parseFloat(secondNum.value);
}
divide.onclick = () => {
    result.value = parseFloat(firstNum.value) / parseFloat(secondNum.value);
}
