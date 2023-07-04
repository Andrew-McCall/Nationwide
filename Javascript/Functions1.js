
function print() {
    console.log("Hello World!")
}

function print_name(name){
    console.log(`HELLO, ${name}`)
}

print_name("Andrew") // HELLO, Andrew
print_name("David")  // HELLO, David
print_name("McCall") // HELLO, McCall

function square_number(n) {
    return n * n
}

let squared = square_number(4)
console.log(squared) // 16

console.log(square_number(square_number(3)))
print_name(square_number(3))  // HELLO, 9

let array = [4,8,2,3,7,6,5,1]
array = array.map(square_number)
array = array.map(square_number)
console.log(array) // [256, 4096, 16, 81, 2401, 1296, 625, 1]

function return_5(){
    return 5
}

console.log(return_5()) // 5
let number = return_5()
console.log(number)     // 5 


function randomNumber(number){ // 0 and number
    return Math.floor(Math.random() * number)
}

console.log(randomNumber(10))
console.log(randomNumber(10))
console.log(randomNumber(10))
console.log(randomNumber(10))
console.log(randomNumber(10))

function add(a,b){
    return a + b
}

function sub(a,b){
    return a - b
}

function muli(a,b){
    return a * b
}

function divi(a,b){
    return a / b
}

let output = add(5,9)
let output2 = sub(output, 2)
let output3 = sub(divi(muli(output2, output), 3), 1)
console.log(output3) // 55

// Task 

// Create a function that says Hi, [your name]
// Try them out

// Create the math functions -- return
// Try them out

// Create a function that takes 3 variables. 
// 2 numbers, string that is the operation
// calc(3,4,"div") // 0.75
// calc(5,8,"add") // 13
// Try them out


//                     inputs are optional
// function [name] (input1,input2,input3,input4...){
//
// }

function greeting (firstname, surname){
    console.log(`Hello, ${firstname} ${surname}`)
}

greeting("Andrew", "McCall")

function calculator(numberOne, numberTwo, operation){

    let output;
    switch (operation){
        
        case "+":
            operation =  "Addition"
        case "Addition":
            output = numberOne + numberTwo
            break;
        
        case "-":
            operation= "Subtraction"
        case "Subtraction":
            output =  numberOne - numberTwo
            break;

        case "div":
        case "/":
            operation = "Divsion"
        case "Divsion":
            output =  numberOne / numberTwo
            break;

        case "*":
            operation = "Mutliply"
        case "Mutliply":
            output =  numberOne * numberTwo
            break;

        case "**":
            operation = "Power"
        case "Power":
            output =  numberOne ** numberTwo
            break;

        default:
            console.log(`'${operation}' is an invaild operation`)
            return

    }

    console.log(`${numberOne} ${operation} ${numberTwo} Equals ${output}`)
    
}
calculator(1, 2, "-")
calculator(1, 2, "Divsion")
calculator(1, 2, "/")
calculator(1, 2, "+")
calculator(1, 2, "Z5235325")
calculator(4, 4, "**")

/*
MERN

Node       - Backend - Runs out javascript code
Express    - Specific lib for an Application Programming Interface
MongoBD    - NOSQL DB - stores json object. you can make "collections" which groups
React      - uses a mix of html and js (jsx) the react lib

Application Programming Interface
A set of rules for 2+ computers to talk
*/