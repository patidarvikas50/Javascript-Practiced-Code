var inputAmount = document.getElementById("input-amount");
var useFullAmountCheckBox = document.getElementById("use-full-amount-checkbox");
var button = document.getElementById("btn");

//console.log(button)

function disableInput(){
  

    inputAmount.disabled = useFullAmountCheckBox.checked ;
    inputAmount.value ="";
}


useFullAmountCheckBox.addEventListener("change", disableInput);