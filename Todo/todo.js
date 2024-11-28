var inputText = document.getElementById("title");
var addButton = document.getElementById("btn-add");
//console.log(inputText)

function handleAddButoon (){
    var inputValue = inputText.value;

    var listItem = document.createElement("li");
    var todoList = document.getElementById("todo-list");
    var checkBox = document.createElement("button");
    var itemTitle = document.createElement("span");

    checkBox.classList.add("checkbox");
    itemTitle.innerText = inputValue;

    listItem.appendChild(checkBox);
    listItem.appendChild(itemTitle)

    todoList.appendChild(listItem)

    //console.log("clicked")
}

addButton.addEventListener('click', handleAddButoon)