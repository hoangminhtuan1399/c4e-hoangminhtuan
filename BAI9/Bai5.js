let arrNumber = [1,3,2,9,4,8,5,7,6,10];
//Tính trung bình cộng của mảng
calAverage = () => {
    let sum = 0;
    for (let i = 0; i < arrNumber.length; i++) {
        sum += arrNumber[i];
    }
    return sum/arrNumber.length;
}
console.log("Trung bình cộng của mảng:", calAverage());
//Tìm số lớn nhất trong mảng
findMax = () => {
    let max = arrNumber[0];
    for (let i = 0; i< arrNumber.length; i++) {
        max < arrNumber[i] ? max = arrNumber[i] : max = max;
    }
    return max;
}
console.log("Số lớn nhất trong mảng:", findMax());
//Tìm số nhỏ nhất trong mảng
findMin = () => {
    let min = arrNumber[0];
    for (let i = 0; i< arrNumber.length; i++) {
        min > arrNumber[i] ? min = arrNumber[i] : min = min;
    }
    return min;
}
console.log("Số nhỏ nhất trong mảng:", findMin());
//Tính tổng các số chẵn trong mảng
sumEven = () => {
    let sumEven = 0;
    for (let i = 0; i< arrNumber.length; i++) {
        arrNumber[i] % 2 == 0 ? sumEven += arrNumber[i] : sumEven = sumEven;
    }
    return sumEven;
}
console.log("Tổng các số chẵn trong mảng:", sumEven());
//Tính tổng các số lẻ trong mảng
sumOdd = () => {
    let sumOdd = 0;
    for (let i = 0; i< arrNumber.length; i++) {
        arrNumber[i] % 2 != 0 ? sumOdd += arrNumber[i] : sumOdd = sumOdd;
    }
    return sumOdd;
}
console.log("Tổng các số lẻ trong mảng:", sumOdd());
//Đếm các số chia hết cho 3
countDivisible3 = () => {
    let countDivisible3 = 0;
    for (let i = 0; i< arrNumber.length; i++) {
        arrNumber[i] % 3 == 0 ? countDivisible3 += 1 : countDivisible3 += 0;
    }
    return countDivisible3;
}
console.log("Số phần tử chia hết cho 3:", countDivisible3());
