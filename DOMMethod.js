
// var textInput = document.getElementById('input-text');
// var outPut = document.getElementById('output');
// var changeInnerTextButton = document.getElementById('change-inner-text-btn');

//console.log(inputValue, outPut,changeInnerTextButton)

// function handleChangeInnerTextButton(){
//     var inputValue = textInput.value ;
//     outPut.innerText = inputValue
// }

// changeInnerTextButton.addEventListener('click',handleChangeInnerTextButton )

// var pageHeading = document.getElementById('page-heading');
// var changeHeadingButton = document.getElementById('change-heading-btn');

// function handleChangeHeadingButton (){

//     pageHeading.innerText = pageHeading.innerText === "Hello World"? "Hello Geeks": "Hello World"


// }

// changeHeadingButton.addEventListener('click', handleChangeHeadingButton)


var tab1 = document.getElementById("tab-1");
var tab2 = document.getElementById("tab-2");
var tab3 = document.getElementById("tab-3");
var outPut = document.getElementById('output');

function handleTab1Click() {
  tab2.className = "chip";
  tab3.className = "chip";
  tab1.className = "chip selected-chip";
  outPut.innerText = "selected tab 1"
}

function handleTab2Click() {
  tab1.className = "chip";
  tab3.className = "chip";
  tab2.className = "chip selected-chip";

  outPut.innerText = "selected tab 2"

}

function handleTab3Click() {
  tab1.className = "chip";
  tab2.className = "chip";
  tab3.className = "chip selected-chip";
  outPut.innerText = "selected tab 3"
}

tab1.addEventListener("click", handleTab1Click);
tab2.addEventListener("click", handleTab2Click);
tab3.addEventListener("click", handleTab3Click);



/////

var firstNameInput = document.getElementById('firstName');
var lastNameInput = document.getElementById('lastName');
var submitbutton = document.getElementById('btn-submit');
var fullNameToShow = document.getElementById('fullName');

// console.log(lastNameInput)

function handleSubmitButton(){
    var firstName = firstNameInput.value
    var lastName = lastNameInput.value
    var fullName = firstName.concat(" ").concat(lastName)
    fullNameToShow.innerText = fullName
}
submitbutton.addEventListener('click',handleSubmitButton)


////

var passwordInput = document.getElementById('passwordInput');
var passwordButton = document.getElementById('passwordButton');

function handleHideShowPassword(){

    if(passwordInput.type === 'password'){

        passwordInput.type = "Text"
        passwordButton.textContent = "Hide"
    }else{
        passwordInput.type = "password"
        passwordButton.textContent = "Show"
    }
}

passwordButton.addEventListener('click', handleHideShowPassword)

/////

var chips = document.getElementsByClassName("chip");
var button = document.getElementById('btn-color')




function handlesubmitButton(){
    var chipList = Array.from(chips);
// console.log(chips)
    chipList.forEach((element, index) => {
      var isEven = index % 2 === 0;
    
      console.log(element);
    // console.log("something")
      element.className = isEven ? "chip bg-green" : "chip bg-red";
    });
}
button.addEventListener("click",handlesubmitButton)

