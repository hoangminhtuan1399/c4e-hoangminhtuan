/**
 * Kiểm tra tên đăng nhập
 * @param {string} ID : Tên đăng nhập
 * @param {void} canceled : Input rỗng hoặc Esc => Hiển thị "Canceled"
 * @param {void} denied : Tên đăng nhập sai => Hiển thị "Tôi không biết bạn"
 * @param {void} accessed : Tên đăng nhập đúng => Nhắc nhập mật khẩu 
 */
checkID = (ID, canceled, denied, accessed) => {
    ID == "" || ID == null ? canceled() : ID != "Admin" ? denied() : accessed();
}

/**
 * Kiểm tra mật khẩu
 * @param {string} password : Mật khẩu
 * @param {void} canceled : Input rỗng hoặc Esc => Hiển thị "Đã hủy"
 * @param {void} denied : Mật khẩu sai => Hiển thị "Mật khẩu sai"
 * @param {void} accessed : Mật khẩu đúng => Hiển thị "Chào mừng!" 
 */
checkPassword = (password, canceled, denied, accessed) => {
    password == "" || password == null || "" ? canceled() : password != "mindX" ? denied() : accessed();
}

checkID(
    prompt("Tên đăng nhập: "),
    () => alert("Canceled"),
    () => alert("Tôi không biết bạn"),
    () => checkPassword(
        prompt("Mật khẩu: "),
        () => alert("Đã hủy"),
        () => alert("Mật khẩu sai"),
        () => alert("Chào mừng!")
    )
)
