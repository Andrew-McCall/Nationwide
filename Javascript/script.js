// let [VariableName] = [Data]
// Name can anything withoutspaces
// Cant start with special character or numbers
const string2 = "Text";
let number2 = 0.54;

let unassigned; // undefined - No data has been given
console.log(unassigned)

let example = null // how to assgin the lack of data. Null is data, nothing

let unqiue = Symbol(2); // Used for ids. 
console.log(unqiue)



// == & ===
console.log(example === unassigned)

number2 = 0
console.log("" + number2) // 0

number2 = null
console.log("" + number2) // "null" - becomes string

number2 = 0
console.log("" + number2) // 0

const thisCannotBeChanged = 0;
// Cant change!  thisCannotBeChanged = 50;

let array = [1,2,3,4,5,6]
console.log(array)
console.log("first element is : " + array[0])
console.log("length is: "+ array.length)


let object = {}
let carObject = { model:"Panda", brand:"Fiat", year:2002, driver:object, list:array }

carObject.driver.name = "Andrew"

console.log(typeof carObject)

console.log(carObject)
console.log(carObject.model)
carObject.model = "500"
console.log(carObject.model)

// .methodName() -  method
//            {} -  object
//            [] -  array

function test() {
    let number = 0
    console.log(number)
}

let number = 9;
test()              // Prints 0
console.log(number) // Then prints 9

var moo = "Hello"
let mooo = "Hello"
{
var moo = "World"
let mooo = "World"
}

console.log(moo)
console.log(mooo)

// Backticks `` with ${} inside - string literal
let variable = `i can mix text ${"And Code" + 5*60} and more text ${number2} ${string2} ${test()}`
console.log(variable)

/*
(6) [1, 2, 3, 4, 5, 6]
script.js:10 first element is : 1
script.js:11 length is: 6
script.js:19 object
script.js:21 {model: 'Panda', brand: 'Fiat', year: 2002, driver: {…}, list: Array(6)}
script.js:22 Panda
script.js:24 500
script.js:32 0
script.js:37 9
script.js:46 World
script.js:47 Hello
*/
