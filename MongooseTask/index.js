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
    console.log("3 - Create")
    console.log("4 - Update")
    console.log("5 - Delete")
    console.log("6 - Name Search")
    console.log("7 - Sort (Extension)")
    console.log("q - to Quit")

    // Switch is better than ifs IF you know the outcomes already
    // The switch matches the number entered (see console logs above) to the function 
    // The functions are what need to be edited but you're welcome to add extras/your own
    // *in VSC ctrl click the function to jump to it or scroll down. Each function has extra comments*
    const choice = input("Choose an option: ")
    switch(choice){
 
        case "1": 
            ReadAllFunction()
            break;
 
        case "2":
            ReadByIDFunction()
            break;

        case "3":
            CreateFunction()
            break;

        case "4":
            UpdateFunction()
            break;
        
        case "5":
            DeleteFunction()
            break;

        case "6":
            NameSearchFunction()
            break;

        case "7":
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
        console.log(person)
    }).catch(()=> {
        console.log("That person does not exist!")
    }).finally( () => {
        MainMenu()
    })
}

function CreateFunction(){    
    // ask for new name,
    // ask for new age,
    // ask for new height
    // ask for new job

    // peopleModel.create({name, age, height})
    // print newly created person (with id)
}

function UpdateFunction(){
    // ask for the id
    
    // ask for new name,
    // ask for new age,
    // ask for new height
    // ask for new job
    // EXT findbyid first to get old values/check if id is vaild

    // peopleModel.updateById(id, {name, age, height})
    // print old person
    // print new person
    console.log("TODO")
    MainMenu()
}

function DeleteFunction(){
    // ask for the id
    // deleteById(id) works but..
    // findByIdAndDelete
    // print the person they deleted
    // EXT confirm that they want to delete this person
    

    console.log("TODO")
    MainMenu()
}

function NameSearchFunction(){
    // ask for the name
    
    // find({name})
    // print everyone found
    console.log("TODO")
    MainMenu()
}

function CustomSortFunction(){
    /// ## This whole function is EXTENSION ##
    // ask for the attribute they wish to sort by
    // ask for whether the sort is ascending or descending
    
    // find all people
    // sort by choosen attribute
    // print all people found

    // There are few hints here, all extension
    // look into "aggregation"
}