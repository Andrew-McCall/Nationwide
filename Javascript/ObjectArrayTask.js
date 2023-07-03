/// Task

// Make an array of 4 cars - colour, model, brand, reg

// print the a property of each object

// change the properties

// add a property

// print the whole objects

// print specific keys

// Classes, Arrays, Objects are pass-by-reference
const car1 = {model:"Panda" ,brand:"Fiat", reg:"ABC123", colour:"Hot Pink"}
const car2 = {model:"Panda" ,brand:"Fiat", reg:"DFGES3", colour:"Black"}

const car3 = {model:"A5" ,brand:"Audi", reg:"AdC124", colour:"White"}
const car4 = {model:"M6" ,brand:"BMW", reg:"AzC125", colour:"Grey"}

const garage = [car1]
garage.push(car2)
garage.push(car3)
garage.push(car4)

console.log(garage)

console.log(garage[0].colour)
console.log(garage[1].colour)
console.log(garage[2].colour)
console.log(garage[3].colour)

garage[0].colour = "Green"
garage[1].colour = "Red"
garage[2].colour = "Blue"
garage[3].colour = "Yellow"

console.log(garage[0].colour)
console.log(garage[1].colour)
console.log(garage[2].colour)
console.log(garage[3].colour)

garage[0].driver = "Andrew"
garage[1].driver = "Andrew"
garage[2].driver = "Andrew"
garage[3].driver = null

console.log(garage[0].driver)
console.log(garage[1]["driver"])
console.log(garage[2]["driver"])
console.log(garage[3].driver)

console.log(garage)
console.log(garage[0])
console.log(garage[1])
console.log(garage[2])
console.log(garage[3])

console.log(garage[0]["reg"])
console.log(garage[1]["reg"])
console.log(garage[2]["reg"])
console.log(garage[3]["reg"])


console.log(garage[0]) // {model: 'Panda', brand: 'Fiat', reg: 'ABC123', colour: 'Green', driver: 'Andrew'}

car1.model = "Polar Bear"

console.log(garage[0]) // {model: 'Polar Bear', brand: 'Fiat', reg: 'ABC123', colour: 'Green', driver: 'Andrew'}

console.log(car1) // {model: 'Polar Bear', brand: 'Fiat', reg: 'ABC123', colour: 'Green', driver: 'Andrew'}

const car10 = car1

car10.driver += "8"
car1.driver += "4"

console.log(car1)  // {model: 'Polar Bear', brand: 'Fiat', reg: 'ABC123', colour: 'Green', driver: 'Andrew84'}
console.log(car10) // {model: 'Polar Bear', brand: 'Fiat', reg: 'ABC123', colour: 'Green', driver: 'Andrew84'}

// Pass-by-value
let name1 = "andrew"
let name10 = name1

name1 += "HEllo"
name10 += "World"

console.log(name1)  // andrewHEllo
console.log(name10) // andrewWorld

// PBR
// when you set a variable to an object. both variables represent the same object
let list = ["andrew"]
let list_clone = list

// PBV
// the data is stored twice
let person = "andrew"
let person_clone = person

console.log(list)         // ["andrew"]
console.log(list_clone)   // ["andrew"]
console.log(person)       // andrew
console.log(person_clone) // andrew

person = "mccall"
person_clone = "david"

console.log(person)       // mccall
console.log(person_clone) // daivd

list.push("mccall")
list_clone.push("david")

console.log(list)         // ['andrew', 'mccall', 'david']
console.log(list_clone)   // ['andrew', 'mccall', 'david']


// FANCY Adavanced uses for PBR
function add_driver_to_car(car, person){
    car.driver = person
}

console.log(car4) // {model: 'M6', brand: 'BMW', reg: 'AzC125', colour: 'Yellow', driver: null}
add_driver_to_car(car4, "Andrew")
console.log(car4) // {model: 'M6', brand: 'BMW', reg: 'AzC125', colour: 'Yellow', driver: 'Andrew'}
