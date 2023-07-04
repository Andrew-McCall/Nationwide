let counter = 0;

while (counter < 3){
    console.log(counter)
    counter = counter + 1 // counter += 1
}

while (false){
    console.log("never print!")
}

do{
    console.log("once")  // Prints once
}while (false)

counter = 0
do{
    console.log(counter)
    counter += 1
}while (counter < 3)

counter = 0
while (counter < 10){ // counter is not equal to 10
    console.log(counter)
    counter += 5
}

// index++ | index = index+1 | index+=1
for (let index = 0; index< 10; index++){
    console.log(index)
}

let list = []
for (let index = 10; index > 0; index--){ // index -= 1
    list.push(index*7)
}

for (let index = 0; index < list.length; index++){ // index -= 1
    console.log(index)
}

for (let number of list){
    number *= 19
    console.log(number)
}

for (let number in list){
    list[number] = list[number]*2
    console.log(list[number])
}

// Same as line 29
let index = 0;
while (index < 10){
    console.log(index)
    index++
}

// Same as line 34
index = 10;
while (index > 0){
    console.log(index)
    index--
}

// Same as line 38
index = 0
while (index < list.length){
    let number = list[index]
    number*= 19
    console.log(number)
    index++
}

// Same as line 43
index = 0
while (index < list.length){
    list[index] = list[index]*2
    console.log(list[index])
    index++
}

// while
// for (let var = start; condition; intcrement)

// for of  - cycles through a list
// for in  - cycles through a list's index

// Task

// While Loops Count to 1000
// While loop inside a differnet while loop to print 1-10 10 times for each number
// Change whiles for 'for loops'
// try for 'of' and for 'in' on a list

let i = 0
while (i < 1000){
    i++
    console.log(i)
}

for (let i = 0; i < 1000; i++){
    console.log(i)
}


let x = 0
while (x < 10){
    x++
    
    let y = 0
    while (y < 10){
        console.log(x)
        y++
    }
   
}

for (let x = 0; x < 10; x++){
    for (let y = 0; y < 10; y++){
        console.log(x)
    }
}

// Double each letter of the string
let string = "helloworld"
let array = []
for (let letter of string){

    for (let i = 0; i < 5; i++){
        array.push(letter)
    }

}

console.log(array.join(""))

// Replace each vowel in a string U
array = []
for (let i of string){
    if (i == "o" || i == "e" || i == "a"){
        array.push("U")
    }else{
        array.push(i)
    }
}
console.log(array.join(""))

let edditable_string = string.split("")

for (let i in edditable_string){
    let current_letter = edditable_string[i]

    if (current_letter == "o" || current_letter == "e"){
        edditable_string[i] = "U"
    }

}

console.log(edditable_string.join(""))

console.log(7 * 7)
console.log(7 - 8)
console.log(7 + 8)
console.log(7 / 14)
console.log(7 ** 14) 

console.log(7 % 3)   // 1
console.log(7 % 14)  // 7
console.log(36 % 14) // 8
console.log(64 % 8)  // 0
console.log(66 % 8)  // 2

console.log(36 % 2)  // 0
console.log(5298368932923891 % 2)  // 1



// FIZZ BUZZ
// if the number is a mutplie of:
// 3 - Fizz
// 5 - Buzz
// 15 - FizzBuzz
for (let i = 0; i < 1000; i++){
    
    let output = ""
    if (i % 3 == 0){
        output += "Fizz"
    }

    if (i % 5 == 0){
        output += "Buzz"
    }

    if (i < 100){
        output += "Zing"
    }else if (i % 50  == 0) {
        output += "Ffff"
    } else{
        output += "Bop"
    }

    if (output == ""){
        console.log(i)
    }else{
        console.log(output)
    }

}

let one = 1
let two = "1"

if (one == two){
    console.log("They are the same!")
}

// Will check the data type in addition to value
if (one === two){
    console.log("Will this print?")
}

if (one != two){
    console.log("Will this print?")
}

if (one !== two){
    console.log("their types are different so they are not equal")
}

let bool = false
if (bool){
    console.log(bool)
}else{
    console.log("this will print!")
}

if (false){
    console.log("1")
}else if(false) {
    console.log("2")
}else if (true){
    console.log("3")
}else{
    console.log("4")
}
