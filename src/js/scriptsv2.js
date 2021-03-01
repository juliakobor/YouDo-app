let taskInputForm = document.getElementById("taskForm");
let todoList = document.getElementById("listOfItems");
let minInputLength = 6;
let listItem;
let storageArray = getItemsFromStorage() || [];

function getItemsFromStorage() {
    return JSON.parse(localStorage.getItem("List items"));
}

function showItems() {
    storageArray.forEach(item => {
        addNewListItem(item.task + ", " + "Due date: " + item.duedate + ", " + "Priority: " + item.prio + ", " + "<i class=\"far fa-trash-alt\"></i>");
    })
}
showItems();

function addNewListItem(content) {
    listItem = document.createElement("li");
    listItem.innerHTML = content;
    todoList.appendChild(listItem);
}

taskInputForm.addEventListener("submit", event => {
    event.preventDefault();

    document.querySelector("h1").innerText = "My current YouDo list";
    document.querySelector("h2").style.display = "none";

    addNewListItem(taskInputForm.item.value + ", " + "Due date:" + " " +
        taskInputForm.date.value + ", " + "Priority:" + " " + taskInputForm.priority.value + ", " + "<i class=\"far fa-trash-alt\"></i>");

    let todoObject = {
        task: taskInputForm.item.value,
        duedate: taskInputForm.date.value,
        prio: taskInputForm.priority.value
    }
    storageArray.push(todoObject);
    localStorage.setItem("List items", JSON.stringify(storageArray));

})

todoList.addEventListener("click", event => {
    event.preventDefault();

    if (event.target.firstChild === null) {
        event.target.parentNode.remove();
    }
})

taskInputForm.item.addEventListener("keyup", event => {
    event.preventDefault();
    if (taskInputForm.item.value.length < minInputLength) {
        taskInputForm.create.disabled = true;
        event.target.classList.add("error");
        event.target.classList.remove("success");
    } else {
        taskInputForm.create.disabled = false;
        event.target.classList.add("success");
        event.target.classList.remove("error");
    }
})









