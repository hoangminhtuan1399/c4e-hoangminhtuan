/**
 * Kiểm tra tuổi
 * @param {number} age : Tuổi
 * @returns : true nếu (tuổi > 18) hoặc (tuổi <= 18 và confirm Yes), false nếu (tuổi <= 18 và confirm No)
 */
function checkAge(age) {
    return age > 18 || confirm("Did parents allow you?");
}
