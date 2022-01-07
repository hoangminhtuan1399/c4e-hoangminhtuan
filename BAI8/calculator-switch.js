const operator = prompt("Nhập phép tính (+, -, *, hoặc /): ");
let firstNum = parseFloat(prompt("Nhập số thứ nhất: "));
let secondNum = parseFloat(prompt("Nhập số thứ hai: "));
let result;
switch (operator) {
    case "+":
    result = firstNum + secondNum;
    console.log(`${firstNum} ${operator} ${secondNum} = ${result}`);
    break;
    case "-":
    result = firstNum - secondNum;
    console.log(`${firstNum} ${operator} ${secondNum} = ${result}`);
    break;
    case "*":
    result = firstNum * secondNum;
    console.log(`${firstNum} ${operator} ${secondNum} = ${result}`);
    break;
    case "/":
    result = firstNum / secondNum;
    console.log(`${firstNum} ${operator} ${secondNum} = ${result}`);
    break;
    default:
    console.log("Vui lòng tải lại trang và nhập lại.");
}