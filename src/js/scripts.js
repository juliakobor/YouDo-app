let taskInputForm = document.getElementById("taskForm");
let listItem;
let todoList;

taskInputForm.addEventListener("submit", event => {
    event.preventDefault();

    //Feliratok változása
    document.querySelector("h1").innerText="My first YouDo list";
    document.querySelector("h2").style.display="none";

    //Új elemek hozzáadása és kiíratása
    todoList = document.createElement("ul");
    listItem=document.createElement("li");
    document.getElementsByTagName("body")[0].appendChild(todoList);
    todoList.appendChild(listItem);
    listItem.innerHTML=taskInputForm.item.value + " " + "<button><i class=\"far fa-trash-alt\"></i></button>";
    listItem.classList.add("visibleItem");
    });

    //Listaelem törlése
    let valami = document.querySelectorAll("li");
    valami.addEventListener("click", event => {

    });



    /*ARRAY MEGOLDÁS
    todoItems.push();
    document.getElementsByTagName("body")[0].appendChild(todoList);
    for (let i = 0; i < todoItems.length; ++i) {
        listItem.innerHTML = todoItems[i] + " " + "<button><i class=\"far fa-trash-alt\"></i></button>";
        todoList.appendChild(listItem);
        console.log(todoItems);
    }});*/


    /*//To-do item törlése
    todoItems[0].addEventListener("click", event => {
        event.preventDefault();
        todoItems.splice(0, 1);
    })*/



