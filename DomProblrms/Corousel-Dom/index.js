
let corouselContainer = document.getElementById("Corousel-container");
let corousel = document.getElementById("corousel");
let imageItem1 = document.getElementById("corousel-item1")
let imageItem2 = document.getElementById("corousel-item2")
let imageItem3 = document.getElementById("corousel-item3")
let previousButton = document.getElementById("prev-btn");
let nextButton = document.getElementById("next-btn");

// console.log(nextButton)


const handlePrev = ()=>{
    corousel.scrollBy(-400, 0);
}

const handleNext = ()=>{
    corousel.scrollBy(400,0);
}


previousButton.addEventListener("click", handlePrev)
nextButton.addEventListener("click", handleNext)
    
    