// IF Statements
// Condionals

let a = 55
let b = 0
let c = 101

let variableName = "hello"

console.log(`{ 26588632*52935/5235 }`) // { 26588632*52935/5235 }
console.log(`${ 26588632*52935/5235 }`) // 268857542.487106
console.log(`${variableName}`)

if (a == b){
    console.log(`${a} is ${b}`)
}else{
    console.log(`${a} is not ${b}`)
}

// && is AND
// || is OR
if (c > b && b > a){
    console.log(`${c} is larger than ${b} which is larger than ${a}`)
}else if (c > b ){
    console.log(`${c} is larger than ${b}`)
}else if (b > a){
    console.log(`${b} is larger than ${a}`)
}else if (c > a){
    console.log(`${c} is larger than ${a}`)
}else{
    console.log(`${a}, ${b}, ${c}`)
}

/*
let a = 55
let b = 0
let c = 101
*/

if (a < b){
    console.log("11")
}else if (a == b){
    console.log("12")
}else if (a > b){
    console.log("13") // this one activates
}else if (a === 55){
    console.log("14")
}

if (a > b){
    console.log("1")
}

if (b < c){
    console.log("2")
}

if (a !== "55"){        /// Checks value and type
    console.log("3")
}

if (a === 55){          /// Checks value and type
    console.log("4")
}

if (a == "55"){         /// Checks only value (NOT type)
    console.log("5")
}

if (a < 56 && a <= 55){
    console.log("6")
}

if (a > b || a < c){
    console.log("7")
}

// < works on numbers OR letters
// a = 1, z = 26 -- cannot compare numbers to letter
if ("a" > "z"){
    console.log("true")
}

if ( !(1 == 2) ){
    console.log("true because the false is flipped")
}

if ( !(1 == 1) ){
    console.log("cant see this")
}else{
    console.log("line 88 is false")
}

let object = {}
if (true && !false && "anything" && [] && {} && object){ // Truthey
    console.log("All true")
}

if (null || undefined || false || NaN || "" || 0){ // Falsey 
    console.log("ALL false")
}else{
    console.log("Still ALL false")
}

let foundItem;

// Your loops/code to find the item

if (!foundItem){
    console.log("item wasnt found")
}

let counter = 0
let item;
while (!item){

    if (counter === 1000){
        item = counter
    }

    counter++
}

console.log(item)


// While loop that counts to 1000
// create 3 varaibles that have numbers
// in the while loop does 4 checks using the variables/counter var printing if true

// a,b,c
// counter
// while loop - counting to 1000
// console.log(counter)

let d = 150
let e = 100
let f = 300

// continue and break
let i = 0;
while (true){
    i++

    if (i > f){
        console.log("break!")
        break // Exits the loop
    }

    if (i % 2 == 1){
        continue // Skips to the next iteration
    }

    if (i < e){
        console.log(`${i} is less than ${e}`)
    }else if (i < d){
            console.log(`${i} is less than ${d}`)
    }else{
        console.log(i)
    }

}

for(let i = 0; i < 100; i++){
    console.log(i)

    if (i < 50){continue}
    if (i > 60){break}
    console.log("you can use cointinue to skip later code")
}