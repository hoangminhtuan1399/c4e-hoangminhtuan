const number = parseInt(prompt("Nhập một số dương: "));
let isPrime = true;
if (number < 1) {
    console.log("Số bạn nhập không phải số dương");
    isPrime = false;
}
else if (number == 1) {
    isPrime = false;
}
else if (number == 2) {
    isPrime = true;
}
else {
    for (let i = 2; i <= number/2; i++){
        if (number % i == 0) {
            isPrime = false;
            break;
        }
        else {
            isPrime = true;
        }
    }
}
if (isPrime==true) {
    console.log("Số bạn nhập là số nguyên tố.");
}
else {
    console.log("Số bạn nhập không phải là số nguyên tố.")
}