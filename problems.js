// 1) write a javascript function to check wether an input is a string or not
//it gives true/false
function isString(value){
    var dataType = typeof value
    return dataType === 'string' ? true : false
    
}

console.log(isString(56))

// 2) write a javascript function to check whether a string is blank or not
//it gives true/false
function isBlank(value){
    return value ==="";
}

// alert(isBlank(""))
console.log(isBlank(""))


//3) write a javascript function to convert a string into abbrevated form

function abbrevatedForm (value){

    var splitted = value.split(" ");
    var lastName = splitted[1];
    var abbrevated = lastName[0];
    var result = `${splitted[0]} ${abbrevated}`;
    console.log(result);
}

var fullName = "Vikas Patidar";
abbrevatedForm(fullName)


//4)  write a javascript function that hides email addresses to prevent unauthorized access
function hideEmail (email){
    var splitted = email.split("@");
    var firstHalf = splitted[0];
    var secondHalf = splitted[1];
    var firstThreeLater = firstHalf.substr(0,3);
    var result = `${firstThreeLater}***@${secondHalf}`;
    return result;
}

var email = "vikas50@gmail.com";
console.log(hideEmail(email))

// 5) Write a JavaScript function to capitalize the first letter of a string.

function toCapitalizeFirstLetter (string){

    var firstLater = string.charAt(0).toUpperCase();
    var remainingString = string.slice(1, string.length) 
    result =  firstLater.concat(remainingString)
    return result

}
var origionalString = "hello world";
console.log(toCapitalizeFirstLetter(origionalString))


//6)  Write a JavaScript function to capitalize the first letter of each word in a string

function toCapitalize (string){
    var words = string.split(' ');
    var capitalizedWords = words.map((word)=>{

     var firstLetter = word.charAt(0).toUpperCase();
     var restOfString = word.slice(1, word.length);
    return firstLetter + restOfString;
    });

    return capitalizedWords.join(' ')
}

var originalString2 = "vikas patidar indore madhaya pradesh"
console.log(toCapitalize(originalString2))









//Write a JavaScript function to concatenate a given string n times (default is 1)

function concatenateString(givenStr , n = 1){
    if(n<=0){
        return " ";
    }
    else{
        return givenStr.repeat(n)
    }
}

var givenStr = "Vikas";
var concatinatedString = concatenateString(givenStr , 5)
console.log(concatinatedString)


//write a javascript function to uncommelize a string.

// 10) write a javascript function to convert a string into camel case.

function toCamelCaseStr(str){
    return str.split(' ').map(function(word , index){
 
         if(index == 0){
             return word.toLowerCase()
         }
         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
     }).join('')
 }
 
   var str = "hii i am vikas"
   console.log(toCamelCaseStr(str))


  const studentData = [
    {
      firstName: "Himanshu",
      lastName: "Jain",
      email: "himanshu@gmail.com",
      age: 24,
    },
    {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      age: 22,
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      age: 20,
    },
    {
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice.j@example.com",
      age: 25,
    },
    {
      firstName: "Bob",
      lastName: "Williams",
      email: "bob.w@example.com",
      age: 21,
    },
   
  ];

  
  function updatedData (studentData) {
    var result1 = studentData.map(function(student){

        var fullName = `${student.firstName} ${student.lastName}`;
        var hiddenEmail = hideEmail(student.email);

        return{
            age : student.age,
            fullName: fullName,
            email: hiddenEmail
        }
    })
    return result1
  }
console.log(updatedData(studentData))

//

const partcipants = [
    "Name 1",
    "Name 2",
    "Name 3",
    "Name 4",
    "Name 5",
    "Name 6",
    "Name 7",
  ];
  
  var rooms = 3;

  function allotment (partcipants,roomCount){

    var result =[];
    var partiCipantsPerRoom =Math.floor(partcipants.length/roomCount);

    for(var i =0;i<roomCount;i++){

      var startIndex = i*partiCipantsPerRoom;
      var isLastRoom = i == roomCount-1;
      var endIndex = isLastRoom ? undefined: startIndex+partiCipantsPerRoom;

      result.push({
        roomName: `Room${i+1}`,
        partcipants: partcipants.slice(startIndex,endIndex)
      })
    }
    console.log(result)
  }
  allotment(partcipants,rooms)
  
//   var roomAlotment = [
//     {
//       rommName: "Room 1",
//       partcipants: ["Name 1", "Name 2" , "Name 3"],
//     },
//     {
//       rommName: "Room 2",
//       partcipants: ["Name 4", "Name 5" , "Name 6" , "Name 4"],
//     },
//   ];
  
var products = [
  {
    name: "Redmi Note 10",
    color: "Blue",
    ram: "4 GB",
    price: 10000,
  },
  {
    name: "Redmi Note 10",
    color: "Black",
    ram: "4 GB",
    price: 10000,
  },
  {
    name: "Redmi Note 10",
    color: "Black",
    ram: "6 GB",
    price: 11000,
  },
  {
    name: "Redmi Note 9",
    color: "Black",
    ram: "4 GB",
    price: 9000,
  },
  {
    name: "Redmi Note 9",
    color: "Blue",
    ram: "4 GB",
    price: 9500,
  },
];

function getProductVarients(productList){

  var result =[];

  productList.forEach(function(product){

    var isNameExist =result.findIndex(function(el){

      return el.name === product.name;
     
    })

    if(isNameExist>-1){
      result[isNameExist] ={
                  ...result[isNameExist],
                varients: [...result[isNameExist].varients,

                {
                  color: product.color,
                  ram: product.ram,
                  price: product.price
                }
              ]}

    }else{
      result.push({
        name: product.name,
        varients:[{
          color: product.color,
          ram: product.ram,
          price: product.price
        }]
      })
    }
  })
  console.log(result)
}

getProductVarients(products)


//  [
//   {
//     name: "Redmi Note 10",
//     varients: [
//       {
//         color: "Blue",
//         ram: "4 GB",
//         price: 10000
//       },
//       {
//         color: "Black",
//         ram: "4 GB",
//         price: 10000
//       },
//       {
//         color: "Black",
//         ram: "6 GB",
//         price: 11000
//       },
//     ]
//   }
// ]



var students = [
  {
    name: "",
    email: "",
    mobile: "",
    totalFees: 10000,
    feesPaid: 7000,
  },
  {
    name: "",
    email: "",
    mobile: "",
    totalFees: 5000,
    feesPaid: 3500,
  },
  {
    name: "",
    email: "",
    mobile: "",
    totalFees: 5000,
    feesPaid: 5000,
  },
];



function filtererdData(studentList){
  var result = [];
  studentList.filter(function(student){

      var Percentage = 80;
      var feesPaidInpercentage = (student.feesPaid/student.totalFees)*100;
    
    if(feesPaidInpercentage<Percentage){
      result.push(student)
      console.log(result)
    }
     
  })

}

filtererdData(students)





// var output = [
//   {
//     name: "",
//     email: "",
//     mobile: "",
//     totalFees: 10000,
//     feesPaid: 7000,
//   },
//   {
//     name: "",
//     email: "",
//     mobile: "",
//     totalFees: 5000,
//     feesPaid: 3500,
//   },
// ];


persons =[
  {
    name: "name1",
    age: 20,
    mobile: "9752****",
  },
  {
    name: "name2",
    age: 10,
    mobile: "9752****",
  },
  {
    name: "name3",
    age: 25,
    mobile: "9752****",
  },
  {
    name: "name4",
    age: 15,
    mobile: "9752****",
  },
  {
    name: "name5",
    age: 40,
    mobile: "9752****",
  },
  {
    name: "name6",
    age: 28,
    mobile: "9752****",
  }
]


function getEligiblePerson(personsList){

  var under18 =[];
  var over18 =[];

personsList.forEach(function(person){ 
  if(person.age <18){
    under18.push(person)
  }else {
    over18.push(person)
  }
})
console.log(under18," under18", over18, "over18")
  
}
getEligiblePerson(persons)




var kids = [
  "Kid 1",
  "Kid 2",
  "Kid 3",
  "Kid 4",
]

var candies = 23;

function candiesAllotment(kidList, totalCandies){

  var candiesPerKId = Math.floor(totalCandies/kidList.length);
  var remainingCandies = totalCandies%kidList.length;
  // console.log(remainingCandies)
  var result = {}
  kidList.forEach(function(kidName){
    result[kidName] = candiesPerKId;
  })

  for(var i = 0;i<remainingCandies;i++){
    var keyName = kidList[i];
    result[keyName] = candiesPerKId +1
    
  }
console.log(result)
}



candiesAllotment(kids,candies)
// var outpt = {
//   "Kid 1" : 6,
//   "Kid 2" : 6,
//   "Kid 3" : 6,
//   "Kid 4" : 5
// }
