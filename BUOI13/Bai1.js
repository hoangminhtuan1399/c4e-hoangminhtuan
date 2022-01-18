const body = document.querySelector(".body");
const container = document.querySelector(".container");
const mode = document.querySelector(".mode");
const changeMode = document.querySelector(".changeMode");
const newMode = document.querySelector(".newMode");
let body_mode = localStorage.getItem("mode");

if (body_mode == "dark") {
    body.classList.add("dark");
    mode.innerHTML = "dark mode";
    newMode.innerHTML = "light mode";
} else {
    body.classList.remove("dark");
    mode.innerHTML = "light mode";
    newMode.innerHTML = "dark mode";
}

changeMode.addEventListener("click", function () {
    let body_mode = localStorage.getItem("mode");
    if (body_mode != "dark") {
        body.classList.add("dark");
        mode.innerHTML = "dark mode";
        newMode.innerHTML = "light mode";
        localStorage.setItem("mode", "dark");
    } else {
        body.classList.remove("dark");
        mode.innerHTML = "light mode";
        newMode.innerHTML = "dark mode";
        localStorage.setItem("mode", "light");
    }
})
