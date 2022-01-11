/**
 * Tìm số nhỏ hơn giữa hai số
 * @param {number} firstNumber : Số thứ nhất
 * @param {number} secondNumber : Số thứ hai
 * @returns số nhỏ hơn hoặc "Equal" nếu hai số bằng nhau
 */
function checkMin(firstNumber, secondNumber) {
    return firstNumber > secondNumber? secondNumber : secondNumber > firstNumber? firstNumber : "Equal";
}
