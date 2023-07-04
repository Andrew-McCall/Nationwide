
function runner( method ){
    method()
}

// Context i.e 'this' keyword
// When a function is saved as a variable. it is scoped
const helloWorld = function HelloWorld() { // expression function
    console.log("hello World")
}
 
const helloWorldArrowed = () => { // arrowed function
    console.log("New Hello World")
}

const helloNameArrowed = (name) => {
    console.log(`Hello, ${name}!`)
}

const hello = () => "Hello World"
const add = (a, b) => a + b 
// const add = (a, b) => {return a+b}

// no brackets for ONE input
const square = number => number * number

console.log(add(1532,532))

let list = [24,23,523634,634,34,12,6,132]
console.log( list.map( x => x * 2 ) )

function arrayMap(list, func){
    for (let i in list){
        list[i] = func(list[i])
    }
}

arrayMap(list, x => x * 2  )
console.log(list)

function halve(x) {
    return x/2
}

arrayMap(list, halve)
console.log(list)

// expression - saving to a variable
// arrowed    - using the arrow syntax to remove 'this' context
// annoymous  - not saving at all

const power = (number, power)  =>  {
    output = number

        for (let x = 1; x < power; x++){
            output *= number
        }

    return output
}

console.log(power(2, 3))
console.log(power(3, 6))
console.log(power(9, 3))

list = [24,231,5236341,6343,344,12,6,132]

console.log("  ")
list.forEach(x => console.log(x))

console.log("  ")
list.filter(x => x%2 == 0).forEach(x => console.log(x))

console.log("  ")
list.map( x=> x/3 ).forEach(x => console.log(x))

console.log("  ")
list.sort( (a,b) =>  a - b ).forEach(x => console.log(x))

console.log("  ")
list.sort( (a,b) =>  b - a ).forEach(x => console.log(x))


function calc (a, b, operation){
    let output = operation(a, b)

    console.log( output )
}

const multi = (x,y) => x*y
calc(5, 6, multi)

calc(2532, 523532, (x,y) => Math.log(x,y))
calc(235,6, (a,b) => a ** b)

const hello1 = () => "Hello World"
const add1 = (a, b) => a + b 

// Task
// Arrowed function that says hello to an inputed name

// Make an array. try .forEach on the array passing in an 
// annoymous function

// calculator as the operator is an anoynmous function


// array.forEach() 
// takes in a function and (loops) calling said function using 
// each element as the input
let array = [55,2,3,53,5]
array.forEach(x => console.log(x))

let sum = 0;
array.forEach(x => sum+=x)
console.log(sum)

array.forEach(x => {
    if (x % 2 == 0){
        console.log(`${x} is Even`)
    }else{
        console.log(`${x} is Odd`)
    }
})

for (let x of array){
    func(x)
}

let arrayExample = []

function getItem(){
    let input = prompt("Enter a number ('quit' to quit)?")

    if (input != "quit" && input != null){
        arrayExample.push(input)
        getItem()
    }else{
        console.log(arrayExample)
    }
}

getItem()

