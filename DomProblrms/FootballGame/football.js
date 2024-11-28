let mainContainer = document.getElementById("main-containe");
let football = document.getElementById("football");
let goal = document.getElementById("goal");
let kickButton = document.getElementById("kick-btn");
let tryAgain = document.getElementById("try-again-btn");

let goalCount = 0;

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const randomNumber = random(220, -220)

const handleKick = () => {

    football.style.transform = "translateY(-400px)" + `translateX(${randomNumber}px)`;
}

const handleTryAgain = () => {

    
    football.style.transform = `translateY(0px)  translateX(0px)`;
    
}


kickButton.addEventListener("click", handleKick);
tryAgain.addEventListener("click", handleTryAgain)

