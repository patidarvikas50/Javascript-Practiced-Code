var inputTitle = document.getElementById("input-title");
var submitButton = document.getElementById("submit-btn");
var tableBody = document.getElementById("table-body");


function handleSubmitButton(){

var inputValue = inputTitle.value;

if (inputValue!== "") {
    
 
  var tableRow = document.createElement("tr");
  var tableData = document.createElement("td");
  var deleteButton = document.createElement("button");

  tableBody.appendChild(tableRow);
  tableRow.appendChild(tableData);
  tableRow.appendChild(deleteButton);

  tableData.textContent = inputValue;
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", function () {
    
    tableBody.removeChild(tableRow);
  });

  
  inputTitle.value =""

}

}



submitButton.addEventListener("click", handleSubmitButton)


