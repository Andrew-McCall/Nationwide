// Pass By Value - Primitive types
let a = 10;
let b = a;

a += 5;

console.log(a) // 15
console.log(b) // 10

// Pass By Reference - exampleObjects, Arrays, Classes
let c = {} 
let d = c
c["key"] = "Value"

console.log(c) // {key: 'Value'}
console.log(d) // {key: 'Value'}

d["key"] = "NO thanks!"
console.log(c) // {key: 'NO thanks!'}
console.log(d) // {key: 'NO thanks!'}


let e = []
let f = e
e.push(1)
f.push(-1)
console.log(e) // [1, -1]
console.log(f) // [1, -1]

// API's, Configs
let object = {
    String:"Andrew",
    list:[],
    number:20,
    subexampleObject: {}
}

object.key = "value";
console.log(object["key"])   // "value"

object["key"] = "new value"
console.log(object.key)      // "new value"

let keyName = "key";
console.log(object[keyName]) // "new value"
// object[keyName] | object["key"]






let exampleObject = new Object()

exampleObject.name = "Andrew"
console.log(exampleObject.name)              // "Andrew"

console.log(exampleObject.doesnt_exist)      // Undefined

exampleObject.doesnt_exist = 1
console.log(exampleObject.doesnt_exist)      // 1






let exampleObject2 = {}

exampleObject2["name"] = "Andrew"
console.log(exampleObject2["name"])          // "Andrew"

console.log(exampleObject2["doesnt_exist"])  // Undefined

exampleObject2["doesnt_exist"] = 1
console.log(exampleObject2["doesnt_exist"])  // 1

let preloadedObject = { name:"Andrew", doesnt_exist:1}
console.log(preloadedObject.name)            // "Andrew"
console.log(preloadedObject["doesnt_exist"]) // 1

let carPark = [
    { make: "Audi", model: "A5", carReg: "AB12CDE" },
    { make: "hyundai", model: "i30", carReg: "A1CDE" }
]

// for loop, which loops automatically setting variable to each element of list

console.log(carPark[0].make)


for (let item of carPark){
    console.log(item.carReg)
}

let properList = new Array()
let easierList = []

properList.push("Andrew")
properList.push("McCall")
easierList.push("David")

console.log(properList)
console.log(easierList)

for (let name of properList){
    console.log(name)
}

console.log(properList[0]) // Andrew
console.log(properList[1]) // McCall

for (let i = 0; i < properList.length; i++){
    console.log(properList[i])
}

let prelaodedListTwo = new Array(10,12,63,12634,1523)
let prelaodedListOne = [10,12,63,12634,1523]

console.log(prelaodedListOne) // [10,12,63,12634,1523]
console.log(prelaodedListTwo) // [10,12,63,12634,1523]

let emptyList = new Array(50) // empty list. 

console.log(emptyList)    // [empty × 50]
console.log(emptyList[0]) // undefined
/*
Exercises:

    3 Objects - Animal/Pet themed (name, size, breed, age)

    push objects into list.

    loop through and print their names

    loop through again and change some of their properties

    loop a third time with a different method (if used for, use while, if used while...)
    and print their stats again

*/

let Meso = {name:"Meso", size:300, breed:"Long hair guineapig", age:1}

let Mochi = new Object({name:"Mochi", size:400, breed:"Long hair guineapig", age:.9})

let Squishy = new Object() // {}
Squishy.name = "Squishy"
Squishy.size = 800
Squishy["breed"] = "Long hair guineapig"
Squishy["age"] = 5

//let pets = [Meso, Mochi, Squishy]
let pets = new Array() // []

pets.push(Meso)
pets.push(Mochi)
pets.push(Squishy)

// in does a counter - the index
// of does the item
for (let pet of pets){
    console.log(pet.name)
    console.log(pet)
}

for (let i = 0; i < pets.length; i++){
    /* PASS BY REF
    let currentPet = pets[i];
    currentPet.age *= 2
    currentPet.size *= 2
    */
    pets[i].age *= 3
    pets[i].size *= 7
}

let i = 0;
while (i < pets.length){
    let currentPet = pets[i];
    console.log(`Name:${currentPet.name} Size:${currentPet.size} Age:${currentPet.age}`);
    i++;
}