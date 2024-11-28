let container = document.getElementById("container")
let row = document.getElementsByClassName("row")
let car = document.getElementById("car")


let start = document.getElementById("btn-right")
let up = document.getElementById("btn-up")
let btnTurnRight = document.getElementById("btn-turn-right")
var btnDown = document.getElementById("btn-down");


var signalDiv = document.getElementById("signal");


let HandlStart = () => {
    car.style.transform = "translateX(460px)";
}


let handleUpCar = () => {
    car.style.transform = "translateX(460px)" + "translateY(-220px)";
}


let handleRight = () => {
    car.style.transform = "translateX(550px)" + "translateY(-220px)";
}

let handleBtnDown = ()=>{
    car.style.transform = "translateX(550px)" + "translateY(-15px)";
}



start.addEventListener("click", HandlStart);
up.addEventListener("click", handleUpCar);
btnTurnRight.addEventListener("click", handleRight);
btnDown.addEventListener("click", handleBtnDown);


let handleSignal = () => {

    let isGreen = true;

    setInterval(function () {
        if (isGreen) {
            signalDiv.style.backgroundColor = "red";
        } else {
            signalDiv.style.backgroundColor = "#7fff00";
        }
        isGreen = !isGreen;
    }, 3000);
}

document.addEventListener("DOMContentLoaded", handleSignal)

