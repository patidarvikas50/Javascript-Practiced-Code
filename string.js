// types of string

//1st 'single quotes' 
//2nd "double quotes"
//3rd `back Ticks quotes` >>>>  Often used for writing more than one line

// var single = 'single'
// var double = "double \"abc\" "
// var backTick = `backTick 
// vikas 
// patidar`

// // console.log(double)

// var firstName = "vikas"
// var lasttName = "patidar"

// var fullNameWay1 = firstName.concat(" ").concat(lasttName)
// var fullNameWay2 = firstName +" "+ lasttName




//Tamplet Literals

// enclosed in backticks (` `) 
//instead of single or double quotes,
// it allow us to embed variables or
// expressions directly within the string using ${}.

// var fullNameWay3 = `${firstName} ${lasttName}`
// console.log(fullNameWay3)

//escaped Tamplet
// var singleQuoted = 'my name is \'vikas\''
// var doubleQuoted = "my name is \"vikas\""
// // console.log(singleQuoted)

//To include a newline character within a string, you can use \n:

// var multiLine = "This is\na multi-line\nstring";
// console.log(multiLine)


//Methods ---->>>>>

// toUpperCase
// var firstName = "Vikas"

// var upperCase = firstName.toUpperCase()
// console.log(upperCase)

//tolowercase
// var lowerCase = firstName.toLowerCase()
// console.log(lowerCase)



// substring (start index , end index)
// var sentence = "my name is vikas name patidar"
// var extractedName = sentence.substring(12, 8)
// console.log(extractedName, "...................")


// var str = 'helloooo world'
// const sub3 = str.substring(2, 6) // index ko swap karke print karega but count 0 se hi start karega
// console.log(sub3)







//substr >>depricated
// var extractedName = sentence.substr(8)
// console.log(extractedName)


//replace
//  -->>it takes two parameters to replace the string word
// in the  first parameter is what we want to replace and second is what we want to add

var replaced = sentence.replace("name", "fullName")
console.log(replaced)

//replaceAll
// var replaced = sentence.replaceAll("name", "fullName")
// console.log(replaced)

//split
//gives array indexes of splited sentences
// var splited = sentence.split(" ")
// console.log(splited)


//slice 
//it start - count from last index
// var sentence  = "My name is Vikas";
// var slicedName = sentence.slice(-4)
// console.log(slicedName);

//trim 
// var title = "    Hello Doston   "
// var trimed = title.trim()
// console.log(trimed)

//trimStart 

// var trimstart = title.trimStart()
// console.log(trimstart)

//trimEnd

// var trimEnd = title.trimEnd()
// console.log(trimEnd)

//padStart 

// var invoice = "12"
// var padStart = invoice.padStart(6 , "*")
// console.log(padStart)

//padEnd 
// var padEnd = invoice.padEnd(5, "*")
// console.log(padEnd)

//charAt 
// var fullName = "Vikas Patidar";
// var specific = fullName.charAt(3)
// console.log(specific)

//charCodeAt >> provides unicode
// var fullName = "Vikas Patidar";
// var index = 1 
// var unicode = fullName.charCodeAt(index)
// console.log(unicode)

//length 
//gives total length count of string 
// var fullName = "My name is Vikas  Patidar";
// var length = fullName.length
// console.log(length)

// //startsWith >> it gives true or false
// var startWith = fullName.startsWith("My")
// console.log(startWith)

// //endsWith >> it gives true or false
// var endsWith = fullName.endsWith("Patidar")
// console.log(endsWith)

// //indexOf 
// var fullName = "My name is Vikas  Patidar";
// console.log(fullName.indexOf("a"))

// //lastIndexOf 
// var fullName = "My name is Vikas  Patidar";
// console.log(fullName.lastIndexOf("a"))

// //repeate >> repeates the string
// var fullName = "My name is Vikas  Patidar";
// console.log(fullName.repeat(5))

