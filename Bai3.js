const toDo = document.querySelector(".toDo");
const inputToDo = document.querySelector(".inputToDo");
const addToDo = document.querySelector(".addToDo");
const deleteToDo = document.querySelector(".deleteToDo");
addToDo.onclick = () => {
    if (inputToDo.value !="") {
        const toDoList = document.createElement("li");
        toDoList.innerText = inputToDo.value;
        toDo.appendChild(toDoList);
        inputToDo.value = "";
    }
}
deleteToDo.onclick = () => {
    toDo.lastChild.remove();
}