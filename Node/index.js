/*
const colours = require("colors/safe")

console.log(colours.green("Hello") + "World!")
console.log(colours.red(20))
console.log("hep")
*/

const colours = require("colors")

let number = 204124156362

console.log("Hello".green + "World!".black)
console.log( number.toString().rainbow )
console.log("hep")

// https://www.npmjs.com/package/colors
// print 3 lines
// one with coloured text
// one with coloured background
// one with colour and underlined

// print 1 - 100 with random colours

// remake fizzbuzzzing but..
// print 1 - 100
// 1
// 2
// fizz
// 4
// buzz
// zing
// ... 
// fizz
// 13
// fizzbuzz = 15
// mutltiple of 3 says fizz in red
// mutltiple of 5 says buzz in green
// mutltiple of 7 says zing in blue
// if it is the multiple of mutliple compbine the words


// single player rock paper scissors
// Math.random() for computer
// prompt-sync is the module name for inputs https://www.npmjs.com/package/prompt-sync
// ext add colour
// add lizard and spock

// const promptSync = require('prompt-sync');
// const prompt = promptSync();

// let n = prompt('How many more times? ');


console.log("Hello".blue)
console.log("Hello".bgBlue)
console.log("Hello".red.underline)

for (let i = 1; i <= 100; i++){
    console.log(i.toString().random)
}

for (let x = 1; x <=150; x++){
    let output = ""

    if (x%3 == 0){
        output += colours.red("Fizz")
    }

    if (x%5 == 0){
        output += colours.green("Buzz")
    }
    
    if (x%7 == 0){
        output += colours.blue("Zing")
    }

    if (output == ""){
        console.log(x)
    }else{
        console.log(output)
    }
}

/*
const promptSync = require("prompt-sync")
const prompt = promptSync() // promptSync is a function that returns a function
                            // the first fucntion finds what sort of consle you are in and how to accept inputs from
*/

const  prompt = require("prompt-sync")()

const options = ["Rock".red, "Paper".green, "Scissors".blue]
function computersTurn(){
    return Math.floor(Math.random() * options.length) // picks a number between 0,1,2
}

// recusion
function playersTurn(){ 
    const input = prompt("RPS? ")
    switch (input.toLowerCase()){
        case "rock":
        case "r":
            return 0

        case "paper":
        case "p":
            return 1

        case "scissors":
        case "s":
            return 2
        
        default:
            return playersTurn()
    }
}

while (true){
    let playerChoice = playersTurn()
    let computerChoice = computersTurn()

    if (playerChoice == computerChoice){
        console.log(`Draw! Both player choose ${options[playerChoice]}`)
    }else if ((playerChoice + 1)%3 == computerChoice){ // one use of modulus is to "wrap" maths. choice 2 + 1 becomes choice 0. 3%3 = 0
        console.log(`Computer Won! ${options[computerChoice]} beats ${options[playerChoice]}`)
    }else{
        console.log(`Player Won! ${options[playerChoice]} beats ${options[computerChoice]}`)
    }
}