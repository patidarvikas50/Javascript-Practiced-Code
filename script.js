var array = ["red", "blue", "green", "yello", "yello", "green", "red", "blue"];
var numberWiseCount = {};


// using for loop

// for(var i=0;i<=array.length;i++){

//     var  keyName = array[i];

//     numberWiseCount[keyName] = numberWiseCount[keyName] ===undefined ? 1 : numberWiseCount[keyName]+1
// }
// console.log(numberWiseCount, 
//     "keys and key value")


///////// using for each

array.forEach(function (el, ind) {

    var keyName = el;

    numberWiseCount[keyName] = numberWiseCount[keyName] === undefined ? 1 : numberWiseCount[keyName] + 1

})
// console.log(numberWiseCount, "numberWiseCount")_



// blue: 2
// green : 2
// red: 2
// undefined: 1
// yello: 2

// current Max count
// max count colors 

var maxCount = 0;
var maxCountColors = [];

for (var colorName in numberWiseCount) {
    if (numberWiseCount[colorName] > maxCount) {
        maxCount = numberWiseCount[colorName]
        maxCountColors = [colorName]
    } else if (numberWiseCount[colorName] === maxCount) {
        maxCountColors.push(colorName);
    }
}
// console.log(maxCount, "maxCount");
// console.log(maxCountColors,"maxCountColors");






// INPUT : [{productName: "Mobile" , brandName: "Apple"} , {productName: "Watch" , brandName: "Apple"} , {productName: "Mobile" , brandName: "Samsung"}]

// OUTPUT : {Mobile: ["Apple", "Samsung"] , Watch: ["Apple"]}



var products = [
    { productName: "mobile", brandName: "apple", },
    { productName: "watch", brandName: "apple", },
    { productName: "mobile", brandName: "samsung" },
    { productName: "mobile", brandName: "samsung" }

]

var productWiseBrands = {};

products.forEach(function (el) {

    var productName = el.productName;
    var brandName = el.brandName;

    //   console.log(productWiseBrands[productName])

    console.log(productName, brandName)
    var isProductExists = productWiseBrands[productName] !== undefined;
    console.log(isProductExists);

    if (isProductExists) {
        var brands = productWiseBrands[productName];

        if (!brands.includes(brandName)) {
            brands.push(brandName);
            productWiseBrands[productName] = brands;

        }
    } else {
        productWiseBrands[productName] = [brandName];
    }

})
console.log(productWiseBrands)





