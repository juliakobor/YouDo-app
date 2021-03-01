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
        addNewListItem(item.task + ", " + item.duedate + ", " + item.prior + " " + "priority");
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

    document.querySelector("h1").innerText = "My first YouDo list";
    document.querySelector("h2").style.display = "none";

    let itemContent = taskInputForm.item.value + ", " + "Due date:" + " " +
        taskInputForm.date.value + ", " + "Priority:" + " " + taskInputForm.priority.value + " " + "<i class=\"far fa-trash-alt\"></i>";
    addNewListItem(itemContent);

    let todoObject = {
        task: taskInputForm.item.value,
        duedate: taskInputForm.date.value,
        prior: taskInputForm.priority.value
    }
    storageArray.push(todoObject);
    //storageArray.push(taskInputForm.item.value);
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








