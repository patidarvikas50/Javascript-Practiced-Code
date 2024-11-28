
let farePrKm = 5

var stationData =[
    {
        stationName : "Indore",
        distanceFromOrigin : 0
    },
    {
        stationName : "Sehore",
        distanceFromOrigin : 100
    },
    {
        stationName : "Bhopal",
        distanceFromOrigin : 150
    }
]

function getCalculateFare(sourceStationName,destinationStationName){
    var sourceStationDistanceFromOrigin = stationData.find(function(station){
        return station.stationName === sourceStationName;
    }).distanceFromOrigin;
    
    var destinationStationDistanceFromOrigin =stationData.find(function(station){
        return station.stationName === destinationStationName;
    }).distanceFromOrigin;

    var max = Math.max(
        sourceStationDistanceFromOrigin,
        destinationStationDistanceFromOrigin
    );

    var min = Math.min(
        sourceStationDistanceFromOrigin,
        destinationStationDistanceFromOrigin
    );
    
   return (max-min) * farePrKm
}


    var sourceStation = document.getElementById("source-station")
    var destinationStation = document.getElementById("destination-station")
    var searchButton = document.getElementById("search-btn") 


    function handleSearch(){
    var sourceOutput = document.getElementById("output-source")
    var destinationOutput = document.getElementById("output-destination")
    var fareOutput = document.getElementById("output-fare")

    var source = sourceStation.value
    var destination = destinationStation.value
    var calculateFare = getCalculateFare(source,destination);

    sourceOutput.innerText = source;
    destinationOutput.innerText = destination;
    fareOutput.innerText = calculateFare

  
}

  searchButton.addEventListener('click' , handleSearch)

//console.log(searchButton)





