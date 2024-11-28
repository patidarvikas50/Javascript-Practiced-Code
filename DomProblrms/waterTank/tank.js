let mainContainer = document.getElementById("main-container");
let water = document.getElementById("water");
let button = document.getElementById("btn-water-supply")

let containers = document.getElementsByClassName("containers")

let emptyContainers = Array.from(containers)

// console.log(emptyContainers)

let handleWaterSupply = (e)=>{

    let totalWater = water.innerText; 
    let containersCapacity = 20; 
    console.log(totalWater)
    // let percentageToFill = (containersCapacity / totalWater) * 100;
    // console.log(percentageToFill)
    
    emptyContainers.map((container, index) => {
        
       console.log(container.innerText)
      
    });
   
}


button.addEventListener("click",handleWaterSupply)





















// console.log(mainContainer)
// console.log(water)
// console.log(container)