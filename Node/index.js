const mongoose = require("mongoose")
 
const carModel = require("./cars.js")
/*
//                url for local mongo server
console.log("Hello World")
mongoose.connect("mongodb://127.0.0.1:27017")
.then(() => {
    console.log("Connected!")
 
    // rest of code
 
 
    mongoose.disconnect()
    .then(() => console.log("Disconnect"))
 
    console.log("End of mongoose connect, Alarm")
}).catch(err => {
    console.log("there was an error")
})
 
console.log("End of File")
 
/// Console Log are:
// Hello World
// End of File
// Connected!
// End of mongoose connect, Alarm
// Disconnect
*/
 
 
// .then, .catch are known as promises
// https://qa-community.co.uk/~/_/learning/javascript/javascript--callbacks-and-promises
 
 
mongoose.connect("mongodb+srv://nationwide.me135ji.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509").then(() => {
 
    console.log("Connected!")
 
    carModel.create({
         reg:"ABC124",
         make:"Panda",
         model:"Fiat",
         colour:"Pink"
    }).then(()=> {
 
        carModel.find({}).then(res => {
            for (let car of res){
                console.log(car)
            }
 
            mongoose.disconnect()
 
        })
 
    })
 
}).catch(err => {
    console.log("There was an error")
    console.log(err)
})
 

// the collection as a js object that i can interact with easily
 
// const schemaless = mongoose.model("people")
// a model is a mongodb collection
 
/// TASK
// connect to the mongodb server using mongoose
// create a schema
// create a model from the schema
// add a disconnect clause to the .then of the connect
 
// create an object
// read all objects
 
/// EXT
// install prompt-sync
// (user inputs now)
// make a path for creating an object
// make an option to read all objects
// make an option to update