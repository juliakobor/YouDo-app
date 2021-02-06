    let taskInputForm = document.getElementById("taskForm");
    let listItem;
    let todoList = document.getElementById("listOfItems");

    taskInputForm.addEventListener("submit", event => {
    event.preventDefault();

    //Feliratok változása
    document.querySelector("h1").innerText="My first YouDo list";
    document.querySelector("h2").style.display="none";

    //Új elemek hozzáadása és kiíratása
    listItem=document.createElement("li");
    todoList.appendChild(listItem);
    listItem.innerHTML=taskInputForm.item.value + " " + "<i class=\"far fa-trash-alt\"></i>";
    });

    //Listaelem törlése
    todoList.addEventListener("click", event => {
        event.preventDefault();
        if (event.target.firstChild === null) {
        event.target.parentNode.remove();}
    })








