const operator = prompt("Nhập phép tính (+, -, *, hoặc /): ");
let firstNum = parseFloat(prompt("Nhập số thứ nhất: "));
let secondNum = parseFloat(prompt("Nhập số thứ hai: "));
let result;

if (operator=="+") {
    result = firstNum + secondNum;
    console.log(`${firstNum} ${operator} ${secondNum} = ${result}`);
}
else if (operator=="-") {
    result = firstNum - secondNum;
    console.log(`${firstNum} ${operator} ${secondNum} = ${result}`);
}
else if (operator=="*") {
    result = firstNum * secondNum;
    console.log(`${firstNum} ${operator} ${secondNum} = ${result}`);
}
else if (operator=="/") {
    result = firstNum / secondNum;
    console.log(`${firstNum} ${operator} ${secondNum} = ${result}`);
}
else {
    console.log("Vui lòng tải lại trang và nhập lại.");
}