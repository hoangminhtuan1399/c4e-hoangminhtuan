let number = parseInt(prompt("Nhập một con số:"));
if (number%3==0){
    console.log("Số bạn nhập chia hết cho 3, kết quả là: " + number/3);
}
else {
    console.log("Số bạn nhập không chia hết cho 3, số dư là: " + number%3);
}