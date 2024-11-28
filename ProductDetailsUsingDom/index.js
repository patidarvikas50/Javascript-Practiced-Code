
 var products = [
  {
    productName: "mobile",
    details: [

      {
        brandName: "redimi",
        color: "Blue",
        price: 10000
      },

      {
        brandName:"apple",
        color: "white",
        price:60000
      }
    ]
  },

  {
    productName: "watch",
    details: [
      {
        brandName: "fastrack",
        color: "Blue",
        price: 1000
      },

      {
        brandName: "sonata",
        color: "green",
        price: 1500
      },
    ]
  },

  {
    productName: "led",
    details: [
      {
        brandName: "samsung",
        color: "Blue",
        price: 35000
      },

      {
        brandName: "lg",
        color: "grey",
        price: 45000
      },
    ]
  }
]



var productOption = document.getElementById('product-option');
var brandOption = document.getElementById("brand-option")
var searchButton = document.getElementById('search-btn');

function handleSearchButton(){

var outputBrand = document.getElementById('output-brand');
var outputColor = document.getElementById('output-color');
var outputPrice = document.getElementById('output-price');
       

  var selectedProduct = productOption.value;
  var selectedBrand = brandOption.value;

  var selectedProductDetails = products.find(function (product) {
    return product.productName === selectedProduct;
  });

  if (selectedProductDetails) {
    var brandDetails = selectedProductDetails.details.find(function(detail) {
      return detail.brandName === selectedBrand;
    });

    if (brandDetails) {
      outputBrand.textContent = brandDetails.brandName;
      outputColor.textContent = brandDetails.color;
      outputPrice.textContent = brandDetails.price;
    }
}

}

searchButton.addEventListener("click", handleSearchButton);
