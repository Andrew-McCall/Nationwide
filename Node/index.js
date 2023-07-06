const colours = require("colors")

console.log("Hello World!".rainbow)

// https://www.npmjs.com/package/colors
// print 3 lines
// one with coloured text
// one with coloured background
// one with both text and background

// print 1 - 100 with random colours

// remake fizzbuzzzing but..
// mutltiple of 3 says fizz in red
// mutltiple of 5 says buzz in green
// mutltiple of 7 says zing in blue

// single player rock paper scissors
// Math.random() for computer
// prompt-sync is the module name for inputs https://www.npmjs.com/package/prompt-sync
// ext add colour
// add lizard and spock

const promptSync = require('prompt-sync');
const prompt = promptSync();

let n = prompt('How many more times? ');