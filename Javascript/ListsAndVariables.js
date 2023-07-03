/*

Comments
Variables - let, var (const)
Array / Objects
**Loops - While, for, for of/in
If , then, else 
Conditionals

(Functions) - reuse code 

*/

/// Variables
console.log("Hello World!")

// Var   [Name]   =   [Value]
var HasLessStrictRulesOnScope = 9

let variableName = 10

variableName = 99

/// Good for references
const constantVariable = 953

/// Can't change
// constantVariable = 0

console.log(variableName)
console.log(constantVariable)

let Example1 = 0
var Example2 = 0

console.log(Example1) // 0
console.log(Example2) // 0

{
    // Only exists in these curly brackets
    let Example1 = 10 // gets automatically deleted after the brackets
    var Example2 = 10

    console.log(Example1) // 10
    console.log(Example2) // 10
}

console.log(Example1) // 0 - Let was not changed outside of scope
console.log(Example2) // 10

/// Arrays
let text = "my words"
let list = ["andrew","david","mccall",text,"jordan"] // use 99%
let list_advanced = new Array(1,245,523,623,523)

console.log(list)
console.log(list_advanced)

let list_advanced_empty = new Array(53) // A single number will make an empty list
list_advanced_empty[49] = "null" 
console.log(list_advanced_empty) // [empty × 49, 'null', empty × 3]

// Be careful with data types
let maths = "532"
console.log(maths+2) // 5322
console.log(maths*2) // 1064


/// INDEX OF LIST STARTS AT 0 - andrew is 0
console.log(list)    // ['andrew', 'david', 'mccall', 'my words', 'jordan']
console.log(list[0]) // 'andrew'
console.log(list[1]) // 'david'
console.log(list[2]) // 'mccall'

list[4] = "Benblaid"
list[1] = "Middle Name"
console.log(list)    // ['andrew', 'Middle Name', 'mccall', 'my words', 'Benblaid']
console.log(list[1]) // 'Middle Name'

list.push("JB") // Adds an item to the end
console.log(list)    // ['andrew', 'Middle Name', 'mccall', 'my words', 'Benblaid', 'JB']
list.pop()      // Deletes the last item
console.log(list)    // ['andrew', 'Middle Name', 'mccall', 'my words', 'Benblaid']

// first element to the third
console.log(list.slice(0,3)) // ['andrew', 'Middle Name', 'mccall']

let quiteExpensive = [...list.slice(0,3), "MIDDLE EARTH", ...list.slice(3)]
console.log(quiteExpensive)       // ['andrew', 'Middle Name', 'mccall', 'MIDDLE EARTH', 'my words', 'Benblaid']

console.log(quiteExpensive.pop()) // Benblaid
console.log(quiteExpensive)       // ['andrew', 'Middle Name', 'mccall', 'MIDDLE EARTH', 'my words']

quiteExpensive.push("gandalf")

let temp = quiteExpensive[quiteExpensive.length - 1]
quiteExpensive[quiteExpensive.length - 1] = quiteExpensive[4]
quiteExpensive[4] = temp

console.log(quiteExpensive)        // ['andrew', 'Middle Name', 'mccall', 'MIDDLE EARTH', 'gandalf', 'my words']
console.log(quiteExpensive.length) // 6

