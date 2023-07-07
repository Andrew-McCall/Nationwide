const mongoose = require("mongoose")
const input = require("prompt-sync")()
const {carModel, setupTestData} = require("./model/car.js")
const petModel = require("./model/pets.js")
 
 
mongoose.connect("mongodb://127.0.0.1:27017/database").then( () => {
 
    console.log("Connected")
 
    // carModel.create({
    //     reg:"registraion",
    //     name:"jon",
    //     colour:"Pink"
    // }).then(car => console.log(car))
 
    // pets = [{name:"andrew", age:20}]
    petModel.find({}).then(pets => {
        const petsArraySize = pets.length
        console.log(`Pets: ${petsArraySize}`)
        for (let pet of pets){
            console.log(pet)
        }
    })
 
    carModel.find({}).then(cars => {
        console.log(`Cars: ${cars.length}`)
        for (let car of cars){
            console.log(car)
        }
    })
 
})
 
 
// async function FunctionName(){}
 
mongoose.connect("mongodb://127.0.0.1:27017/database").then( async () => {
    console.log("connected")
    await setupTestData();

    // petModel.find({}).then(pets => {
    //     const petsArraySize = pets.length
    //     console.log(`Pets: ${petsArraySize}`)
    //     for (let pet of pets){
    //         console.log(pet)
    //     }
    // })
    
    const pets = await petModel.find({})
 
    console.log(`We have ${pets.length} Pets`)
    for (let p of pets){
        console.log(p)
    }
 
 
    const cars = await carModel.find({})
 
    console.log(`We have ${cars.length} Cars`)
    for (let c of cars){
        console.log(c)
    }
 
}) 
 
function menu(){
    switch(input("What do you want to do? ")){
        case "read":
            readFunction()
            break;
 
        case "quit":
            mongoose.disconnect()
            break;
 
        default:
            menu()
    }
}
 
/// Task
// Create (refactor your current code) a schema and model in another file 
// and import it into index.js
 
// use a async (await) to create and then read a few elements from the database
// create an async function to setup test data for one of your collections
/// ^ what i did
 
// Using prompt-sync
// make a full CRUD menu for your collections
// ReadAll
// Create
// Delete
 
// EXT:
// ReadOne
// Update
// Login menu/check before the menu
// Anything else you can think of
 