const error = document.querySelector("#error");
const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
form.addEventListener("submit", (event) => {
    let error_message = [];
    if (username.value == "" || username.value == null) {
        error_message.push("Username không được để trống.");
    }
    if (password.value.length < 8) {
        error_message.push("Mật khẩu phải có ít nhất 8 kí tự.");
    }
    if (error_message) {
        event.preventDefault();
        error.innerText = error_message.join("\n");
    }
});
