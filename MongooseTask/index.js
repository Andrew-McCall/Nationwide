/// "Imports" - make sure to do npm install
const mongoose = require("mongoose")
const promter = require("prompt-sync") // You may see the the shortcut "const input = require("prompt-sync")()"
const input = promter()                // running the promter function, returns a new function that then accepts inputs instead of configuration
 
const peopleModel = require("./people.js")
 
// Connect then run the annoymous function
mongoose.connect("mongodb://127.0.0.1:27017/nationwide").then( () => {

    // Start the MainMenu Loop
    MainMenu()
 
}).catch(err => {
    console.log("There was an error.")
    console.log(err.message)
})
 
// This function calls itself acting as a loop while running
function MainMenu(){
    
    // Nicely Print each option (used by the switch)
    console.log(" --- CRUD Menu --- ")
    console.log("1 - Read All")
    console.log("2 - Read One")
    console.log("3 - Update")
    console.log("4 - Delete")
    console.log("5 - Name Search")
    console.log("6 - Sort (Extension)")
    console.log("q - to Quit")

    // wait for an answer indefintltitly
    const choice = input("Choose an option: ")
 
    switch(choice){
 
        case "1": 
            ReadAllFunction()
            break;
 
        case "2":
            ReadByIDFunction()
            break;

        case "3":
            UpdateFunction()
            break;
        
        case "4":
            DeleteFunction()
            break;

        case "5":
            NameSearchFunction()
            break;

        case "6":
            CustomSortFunction()
            break;
 
        case "q":
        case "quit":
            console.log("bye!")
            mongoose.disconnect()
            break;
 
        default:
            console.log("That was not a vaild choice!")
            MainMenu()
    }
}
 
function ReadAllFunction(){
    peopleModel.find({}).then( allPeople => {
        if (allPeople.length > 0){
            for (let person of allPeople){
                console.log(person)
            }
        }else{
            console.log("There are no people in the database!")
        }
        MainMenu()
    })
}
 
function ReadByIDFunction(){
    const id = input("What is the person's id? ")
 
    // remeber ids are ObjectIds which are not strings!
    // peopleModel.find({_id: mongoose.Types.ObjectId(id)})
 
    // find by id accepts just a string
    peopleModel.findById(id).then( person => {
        if (person != null){
            console.log(person)
        }else{
            console.log("That person does not extist!")
        }
        MainMenu()
    })
}

function UpdateFunction(){
    // ask for the id
    
    // ask for new name,
    // ask for new age,
    // ask for new height
    // EXT findbyid first to get old values/check if id is vaild

    // peopleModel.updateById(id, {name, age, height})
    console.log("TODO")
    MainMenu()
}

function DeleteFunction(){
    // ask for the id
    // deleteById(id)
    // EXT findbyid to then confirm that they want to delete this person

    console.log("TODO")
    MainMenu()
}

function NameSearchFunction(){
    // ask for the name
    
    // find({name})

    console.log("TODO")
    MainMenu()
}

function CustomSortFunction(){
    /// ## This whole function is EXTENSION ##
    // ask for the attribute they wish to sort by
    // ask for whether the sort is ascending or descending
    
    // find all people
    // sort by choosen attribute

    // There are few hints here, all extension
    // look into "aggregation"
}