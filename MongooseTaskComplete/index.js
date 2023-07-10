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
    switch(choice.toLowerCase()){
 
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
    const name = input("What is the person's name? ")  
    // ask for new age,
    const age = input("What is the person's age? ")  
    // ask for new height
    const height = input("What is the person's height? ")  
    // ask for new job 
    const job = input("What is the person's job? ")  

    // create new person
    peopleModel.create({name, age, height, job}).then( newPerson => {
        // print and return to menu
        console.log(`New person created successfully: ${newPerson}`)
        MainMenu()
    })
}

function UpdateFunction(){
    // ask for the id
    const id = input("What is the person's id? ")  

    // EXT findbyid first to get old values/check if id is vaild
    peopleModel.findById(id).then(selectedPerson => { 

        console.log("Enter nothing to keep old value.")
        // ask for new name,
        const name = input(`Change the person's name from ${selectedPerson.name}? `)  
        // ask for new age,
        const age = input(`Change the person's age from ${selectedPerson.age}? `)  
        const age_parsed = parseInt(age, 10) // convert to number, for validation
        // ask for new height
        const height = input(`Change the person's height from ${selectedPerson.height}? `)  
        // ask for new job 
        const job = input(`Change the person's job from ${selectedPerson.job}? `)  

        const updatedPerson = {
            "name":(name.length < 1)? selectedPerson.name: name,
            "age":(age_parsed == NaN)? selectedPerson.age: age_parsed,
            "height":(height.length < 1)? selectedPerson.height: height,
            "job":(job.length < 1)? selectedPerson.job: job
        }

        peopleModel.findByIdAndUpdate(id, updatedPerson).then(() => {
            // Print old person
            console.log(`Old person: ${selectedPerson}`)
            // Print new person
            console.log(`New person: ${updatedPerson}`)
        }).catch( () => {
            console.log("A value you entered was invaild!")
        }).finally( () => {
            MainMenu() // return to main menu
        })

    }).catch(() => {
        console.log("Could not find person!")
        MainMenu()
    })
}

function DeleteFunction(){
    // ask for the id
    const id = input("What is the person's id? ")  

    // deleteById(id) works but..
    // findByIdAndDelete
    peopleModel.findByIdAndDelete(id).then(personDeleted => {
        // print the person they deleted
        console.log(`Person Successfully Deleted: ${personDeleted}`)
    }).catch( ()=> {
        console.log("Could not find a person with that id!")
    }).finally(() => {
        MainMenu() // return to main menu
    })

    
    // EXT confirm that they want to delete this person
    peopleModel.findById(id).then(person => {
        const confirm = input(`${person}\nAre you sure you wish to delete this person (Y/N)?  `)
        if (confirm.toLowerCase() == "y"){
            peopleModel.deleteOne({_id:mongoose.Types.ObjectId(id)}).then(() => {
                console.log("Person Successfully Deleted")
                MainMenu()
            })
        }else{
            console.log("Delete Canceled")
            MainMenu()
        }
    }).catch( ()=> {
        console.log("Could not find a person with that id!")
        MainMenu()
    })
}

function NameSearchFunction(){
    // ask for the name
    const name = input("What is the person's name? ")  

    peopleModel.find({name}).then(people => {
        // print everyone found
        if (people.length != 0){
            for( let p of people){
                console.log(p)
            }
        }else{
            console.log("Could not find anything with that name!")
        }
        MainMenu()
    })
   
}

function CustomSortFunction(){
    /// ## This whole function is EXTENSION ##
    // ask for the attribute they wish to sort by
    console.log("--- Sorter ---")
    console.log("1 - name")
    console.log("2 - age")
    console.log("3 - height")
    console.log("4 - job")
    console.log("r - return to main enu")
    const choice = input("Which attribute do you wish to sort by?")
    let sortValue;
    switch (choice.toLowerCase()){

        case "1":
            sortValue = "name"

        case "2":
            sortValue = "age"

        case "3":
            sortValue = "height"

        case "4":
            sortValue = "job"

        case "r":
            MainMenu()
            break;

        default:
            CustomSortFunction()
    }

    if (sortValue){
        // ask for whether the sort is ascending or descending
        const order = input("(1) Ascending or (2) Descending? ")
        let sort_order;
        if (order == "1"){
            sort_order = "asc"
        } else if (order == "2"){
            sort_order = "desc"
        }else{
            console.log("Input wasn't '1' or '2' so Ascending was selected")
            sort_order = "asc"
        }
        // find all people
        // sort by choosen attribute
        const sorter = {}
        sorter[sortValue] = sort_order
        peopleModel.find({}).sort(sorter).then(people => {
            if (people.length != 0){
                console.log(`Sorting by ${sortValue} (${sort_order}):`)
                for (let p of people){
                    console.log(p)
                }
            }else{
                console.log("No people to sort!")
            }
            MainMenu()
        })

    }else{
        CustomSortFunction()
    }
}