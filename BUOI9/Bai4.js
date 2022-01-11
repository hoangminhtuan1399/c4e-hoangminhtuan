/**
 * Kiểm tra tên đăng nhập
 * @param {string} ID : Tên đăng nhập 
 * @returns:
 * Input rỗng hoặc Esc => Hiển thị "Canceled"
 * Tên đăng nhập sai => Hiển thị "Tôi không biết bạn"
 * Tên đăng nhập đúng => Nhắc nhập mật khẩu 
 */
checkID = (ID) => {
    ID = prompt("Tên đăng nhập: ");
    ID == "" || ID == null ? alert("Canceled") : ID != "Admin" ? alert("Tôi không biết bạn") : checkPassword();
}

/**
 * Kiểm tra mật khẩu
 * @param {string} password : Mật khẩu
 * @returns:
 * Input rỗng hoặc Esc => Hiển thị "Đã hủy"
 * Mật khẩu sai => Hiển thị "Mật khẩu sai"
 * Mật khẩu đúng => Hiển thị "Chào mừng!" 
 */
checkPassword = (password) => {
    password = prompt("Mật khẩu: ");
    password == "" || password == null || "" ? alert("Đã hủy") : password != "mindX" ? alert("Mật khẩu sai") : alert("Chào mừng!");
}

checkID();