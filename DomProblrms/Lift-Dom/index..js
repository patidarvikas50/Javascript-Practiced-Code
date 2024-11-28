let building = document.getElementById("building");
let liftCard = document.getElementById("lift-card");
let groundFloor = document.getElementById("ground-floor")
let firstFloor = document.getElementById("1st-floor");
let secondFloor = document.getElementById("2nd-floor");
let thirdFloor = document.getElementById("3rd-floor");
let fourthFloor = document.getElementById("4th-floor");
let fifthFloor = document.getElementById("5th-floor");

// let currentFloor = 0

const handleGroundFloor = () =>{
    liftCard.style.transform = "translateY(0px)";
}


const handleFirstFloor = () => {
    liftCard.style.transform = "translateY(-70px)";
};

const handleSecondFloor = () => {
    liftCard.style.transform = "translateY(-140px)";
};

const handleThirdFloor = () => {
    liftCard.style.transform = "translateY(-210px)";
};

const handleFourthFloor = () => {
    liftCard.style.transform = "translateY(-280px)";
};

const handleFifthFloor = () => {
    liftCard.style.transform = "translateY(-340px)";
};


groundFloor.addEventListener("click",handleGroundFloor)
firstFloor.addEventListener("click", handleFirstFloor)
secondFloor.addEventListener("click",handleSecondFloor)
thirdFloor.addEventListener("click",handleThirdFloor)
fourthFloor.addEventListener("click",handleFourthFloor)
fifthFloor.addEventListener("click",handleFifthFloor)   
