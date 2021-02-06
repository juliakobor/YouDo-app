let taskInputForm = document.getElementById("taskForm");

//Új elem hozzáadása
taskInputForm.addEventListener("submit", event => {
    event.preventDefault();

    //Feliratok változása
    document.querySelector("h1").innerText="My first YouDo list";
    document.querySelector("h2").style.display="none";

    let todoItems = [],
        todoList = document.createElement('ul');
    todoItems.push(taskInputForm.item.value);
    document.getElementsByTagName('body')[0].appendChild(todoList);

    for (i = 0; i < todoItems.length; ++i) {
        listItem = document.createElement('li');
        listItem.innerHTML = todoItems[i];
        todoList.appendChild(listItem);
    }
    });


