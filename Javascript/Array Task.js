/// Task
// Make a sentence out of a list
// Each word is a string in a list
// e.g ['The','quick','brown','fox','jumped','over','the','fence']

// Check it's length at the end (and/or while you're making the sentence)

// Change the last word

// Swap 3 words

/// Extension See What .Reverse does

let sentence = ['The','quick','brown']
console.log(sentence.length) // 3
sentence.push('fox')
sentence.push('jumped')
console.log(sentence.length) // 5
sentence.push('over')
sentence.push('the')
sentence.push('fence')
console.log(sentence.length) // 8

console.log(sentence)        // ['The', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'fence']

console.log(sentence.length) // 8 

sentence[sentence.length - 1] = "Cat"

console.log(sentence)        // ['The', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'Cat']

let tempory = sentence[7]
console.log(sentence)        // ['The', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'Cat']

sentence[7] = sentence[3]
console.log(sentence)        // ['The', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'fox']

sentence[3] = tempory
console.log(sentence)        // ['The', 'quick', 'brown', 'Cat', 'jumped', 'over', 'the', 'fox']

//           0th to the 2nd,  (deletes the 3rd),  3rd to the 7th, add in the 3rd item, add the rest
let sliced = [ ...sentence.slice(0,2), ...sentence.slice(3,7), sentence[2], ...sentence.slice(7)]
console.log(sliced) // ['The', 'quick', 'Cat', 'jumped', 'over', 'the', 'brown', 'fox']

sentence.pop()         // ['The', 'quick', 'brown', 'Cat', 'jumped', 'over', 'the']
sentence.push("brown") // ['The', 'quick', 'brown', 'Cat', 'jumped', 'over', 'the', 'brown']
sentence.push("fox")   // ['The', 'quick', 'brown', 'Cat', 'jumped', 'over', 'the', 'brown', 'fox']

console.log(sentence)  // ['The', 'quick', 'brown', 'Cat', 'jumped', 'over', 'the', 'brown', 'fox']

/// .shift()          Deletes from front of the array
/// .unshift(element) Adds to the front of the array
sentence.shift()          // ['quick', 'brown', 'Cat', 'jumped', 'over', 'the', 'brown', 'fox']
sentence.shift()          // ['brown', 'Cat', 'jumped', 'over', 'the', 'brown', 'fox']
sentence.shift()          // ['Cat', 'jumped', 'over', 'the', 'brown', 'fox']
sentence.unshift("quick") // ['quick;, 'Cat', 'jumped', 'over', 'the', 'brown', 'fox']
sentence.unshift("The")   // ['The', 'quick', 'Cat', 'jumped', 'over', 'the', 'brown', 'fox']

console.log(sentence)     // ['The', 'quick', 'Cat', 'jumped', 'over', 'the', 'brown', 'fox']

sentence.reverse()
console.log(sentence)  // ['fox', 'brown', 'the', 'over', 'jumped', 'Cat', 'quick', 'The']

sentence.reverse()
console.log(sentence)  // ['The', 'quick', 'Cat', 'jumped', 'over', 'the', 'brown', 'fox']

console.log(sentence.join())          // The,quick,Cat,jumped,over,the,brown,fox
console.log(sentence.join(" "))       // The quick Cat jumped over the brown fox
console.log(sentence.join(" happy ")) // The happy quick happy Cat happy jumped happy over happy the happy brown happy fox