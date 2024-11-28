
var chips = document.getElementsByClassName("chip");
var button = document.getElementById('btn-delete')
var inputNumber = document.getElementById('number')


function handleDeleteButton(){
    var chipList = Array.from(chips);
    var deleteChip = inputNumber.value    
    
    var chipToDelete = document.getElementById('chip'+deleteChip)
    chipToDelete.remove();
    
    
    //document.querySelector(".chip"+deleteChip).remove();
}
button.addEventListener("click",handleDeleteButton)


// function handlesubmitButton(){
//     var chipList = Array.from(chips);
// // console.log(chips)
//     chipList.forEach((element, index) => {
//       var isEven = index % 2 === 0;
    
//       console.log(element);
//     // console.log("something")
//       element.className = isEven ? "chip bg-green" : "chip bg-red";
//     });
// }
// button.addEventListener("click",handlesubmitButton)

