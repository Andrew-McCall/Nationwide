"use strict"; // Limits javascripts loose typing

// Comments get ignored
// Code is just instructions

// ` backtick, for a string template. 
// Mix text and code easily
//console.log(`${10} bottles on the wall, if one falls then there'll be ${9} bottles left.`)
let loopCounter = 10
while (loopCounter > 0) {
    console.log(loopCounter + " bottles on the wall, if one falls then there'll be "+ (loopCounter-1) + " bottles left.")
    loopCounter = loopCounter - 1
}

/*          
10 bottles on the wall, if one falls then there'll be 9 bottles left.
 9 bottles on the wall, if one falls then there'll be 8 bottles left.
 8 bottles on the wall, if one falls then there'll be 7 bottles left.
 7 bottles on the wall, if one falls then there'll be 6 bottles left.
 6 bottles on the wall, if one falls then there'll be 5 bottles left.
 5 bottles on the wall, if one falls then there'll be 4 bottles left.
 4 bottles on the wall, if one falls then there'll be 3 bottles left.
 3 bottles on the wall, if one falls then there'll be 2 bottles left.
 2 bottles on the wall, if one falls then there'll be 1 bottles left.
 1 bottles on the wall, if one falls then there'll be 0 bottles left.
*/

console.log("")

// Conditions
console.log("Are True")

console.log(0 != 1)   // Not Equal
console.log(0 !== 1)  // Not Equal Strict
console.log(0 == 0)   // Equal
console.log(0 === 0)  // Equal Strict
console.log(1 > 0)    // Greater Than
console.log(0 < 1)    // Lesser Than
console.log(2 >= 2)   // Greater Than OR Equal
console.log(2 <= 2)   // Lesser Than OR Equal


console.log("")
console.log("Are complicated")
console.log(0 == "0")  // True
console.log(0 === "0") // False - Checks data type also

let x = 5
let y = 10
console.log(y === x*2)          // True
console.log(x < y && y === 10)  // True - && is AND
console.log(x < y && y === 5)   // False
console.log(x < y || y === 5)   // True - || is OR

console.log((x < y || y === 5) && x === 5) // True - OR AND

// BIDMAS
// Brackets, Indicies, Divison, Multiplcation, Addition, Subtraction
// (), **, /*, +-

let z = 6+2/4
console.log(z) // 6.5

if (y === 10){
    console.log("Y is equal to ten")
}
    
if (x === 5){ // Code in brackets only executes if statement is met
    console.log("X is equal to five")
}else{
    console.log("X is not five")
}

// Only checks the following ifs, IF the first are false
if (false && 1 === 1 && true != false){
    console.log("First IF")
}else if (true){ 
    console.log("ELSE IF")
}else if (false){ 
    console.log("ELSE ELSE IF")
}else{
    console.log("ELSE")
}

// Executes only WHILE statement is true
while (y <= 1000){
    y*= 2
    console.log(y)
}

// Executes once, then checks/loops
do {
    console.log("Hello ")
} while (false)

// Will never happen, because its false
while (false){
    console.log("World!")
}

let i = 1 // 1
i += 10   // i = i + 10 // 11
i -= 5    // i = i - 5  // 6
i *= 2    // i = i * 2  // 12
i /= 4    // i = i / 4  // 3
i++       // i = i + 1  // i+=1
i--       // i = i - 1  // i-=1
console.log(i)

// 'delete' cannot be called on an variable in strict mode.
//  delete i;

// Type of loop, that manages its own counter variable
//    variable        condition     iter-end
for (let counter = 0; counter < 100; counter++){
    console.log(counter%9)
}

console.log("ARRAY Milarcy")

let array = []
for (let oddNumbers = 1; oddNumbers < 10; oddNumbers += 2){
    array.push(oddNumbers) // Added each odd number to the once empty array
}


for (let item of array){
    console.log(item * 10)
}

for (let counter = 0; counter < array.length; counter++){
    console.log(array[counter] * 10)
}

let counter = 0;
while (counter < array.length){
    console.log(array[counter] * 10)
    counter++;
}

console.log(array)
// console.log(array.map(item => item * 10))

let number = -26
switch (number) {
    case 0:
        console.log("Zero");
        break;
    case 1: 
        console.log("One");
        break;
    case 2: 
        console.log("Two")
        break;

    case -2:
    case -3:
        console.log("minus");
    case 3:
        console.log("three")
        break;
    default:
        console.log("Anything else")
}

// Switch ([input])
// {
// case [Condtion]:
// code 
// break;
//} 

let evenNumbers = 0
while (true){
    evenNumbers++; // en = en + 1

    // If ODD
    if (evenNumbers % 2 === 1){
        continue // Skips to the next iteration of the loop
    }

    // If above 100
    if (evenNumbers > 100){
        break   // Exit the loop
    }

    console.log(evenNumbers)
}

// Modlu returns the remainder if it was a division
console.log(15 % 7)   // 1 (15-(7*2))
console.log(21 % 10)  // 1 (21-(10*2))
console.log(25 % 10)  // 5 (25-(10*2))
console.log(37 % 8)   // 5 (37-32)
console.log(52098326893299 % 8)   // 3 

// Any number modulo 2 returns 0 for even, 1 for odd
console.log(25 % 2)   // 1 (25-24)
console.log(26 % 2)   // 0 (25-24) 

// Addition of a string make it a string,
// multiplcation is treated as a number
console.log((1 + "0") * 9)

let boolExample = false;
if (boolExample || 0 || "" || undefined || null || NaN){
    console.log("falsey shouldnt be here")
}else{
    console.log("I told you it was false")
}

let stringExample = "0" 
if (stringExample && "Anystring" && [] && {} && function(){}){
    console.log("all true")
}else{
    console.log("truthy shouldnt be here")
}