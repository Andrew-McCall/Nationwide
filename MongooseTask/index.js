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
    const name = input("Enter name? ")
    // ask for new age,
    let vaild_age = null
    while (vaild_age == null){ // while age DOES NOT equal a value - While age is equal to "the lack of a value"
        const age_string = input("Enter age? ")
        const age_parsed = parseInt(age_string, 10) // might treat it as binary (base-2) 0, 1  // base-10 = 010 = 0,1,2,3,4,5,6,7,8,9 // 0xFF = 255 base-16 hexa
    
        if (age_parsed){
            vaild_age = age_parsed
            break
        }else{
            console.log("That age is invaild. Enter numbers only!")
        }
    }

    // let prombelm; // as name only
    // console.log(prombelm) // undefined

    // prombelm = true
    // prombelm = false

    // prombelm = null

    // undefined - NO VALUE
    // null      - NOT 0, null. a value that represents no value 

    // ask for new height
    let vaild_height = null
    while (vaild_height == null){
        const height_string = input("Enter height (cm)? ") // input always returns a string "65235"
        const height_parsed = parseInt(height_string, 10) // string into decimal base-10

        // null
        // "falsey" variable

        if (height_parsed){
            vaild_height = height_parsed
            break
        }else{
            console.log("That height is invaild. Enter numbers only!")
        }
    }

    // ask for new job
    const job = input("Enter a job? ")

    // job, name, vaild_age, vaild_height
    const newPerson = { name:name, job:job, age:vaild_age, height:vaild_height }

    // peopleModel.create({name, age, height, job})
    peopleModel.create(newPerson).then( dbPerson => {    // const dbPerson = await peopleModel.create(newPerson);
         console.log(dbPerson)                           // console.log(dbPerson)
         
        // print newly created person (document with id)
        // Loop back to mainmenu

         MainMenu()
    } )

    console.log("Creating...")

    // peopleModel(newPerson).then( documentFormPerson => {
    //     documentFormPerson.save().then( completeDocument =>{
    //         console.log(completeDocument) // have the id 
    //     })
    // })

    // peopleModel.find(newPerson)
    
}

function UpdateFunction(){
    // ask for the id
    const id = input("What is the id?")
    // const objectid = mongoose.Types.ObjectId(id);
    
    // peopleModel.findById(id) // accepts strings and parses them for us
    // peopleModel.find({_id : mongoose.Types.ObjectId(id)})

    // find the object
    peopleModel.findById(id).then( person => {
        // submenu (looping function) 
        // recusion - validation - stolen and extracted function

        // const string = " some expmal;etext \" hjehjelk\"  "
        // `${}` string template - template literal
        // \n    new line - enter - escape character 
        // \\    a single backslash - escape character 
        // \"    a quote in your string - escape character 

        /// ---  if they pass an invaild item (just press enter), it defaults to the old person's value  ---
        // ask for new name, print old name
        console.log(`Current name: ${ person.name }`)
        let newName = input("New name: ")

        if (newName.length < 3){
            newName = person.name
        }

        const oldName = person.name
        person.name = newName

        // ask for new age, print old age
        console.log(`Current age: ${ person.age }`)
        let newAge = input("New age: ")
        newAge = parseInt(newAge, 10)

        if (!(newAge)){
            newAge = person.age
        }

        const oldAge = person.age
        person.age = newAge

        // ask for new height, print old height
        console.log(`Current height: ${ person.height }`)
        let newHeight = input("New height: ")
        newHeight = parseInt(newHeight, 10)

        if (!(newHeight)){
            newHeight = person.height
        }

        const oldHeight = person.height
        person.height = newHeight

        // ask for new job, prin told job
        console.log(`Current job: ${ person.job }`)
        let newJob = input("New job: ")

        if (newJob.length < 3){
            newJob = person.job
        }

        const oldJob = person.job
        person.job = newJob

        // peopleModel.updateById(id, {name, age, height, job})
        /// Mongo shell method. 
        // peopleModel.updateOne( {_id:person._id}, { "$set": {"name":newName, "age":newAge, "height":newHeight, "job":newJob } }).then( ()=> {
        //     console.log("Person Updated!")
        //     console.log(`Old name (${person.name}) was set to ${newName}`)
        //     console.log(`Old age (${person.age}) was set to ${newAge}`)
        //     console.log(`Old height (${person.height}) was set to ${newHeight}`)
        //     console.log(`Old job (${person.job}) was set to ${newJob}`)
        //     MainMenu()
        // } )

        person.save().then(() => {
            console.log("Person Updated!")
            console.log(`Old name (${oldName}) was set to '${person.name}'`)
            console.log(`Old age (${oldAge}) was set to '${person.age}'`)
            console.log(`Old height (${oldHeight}cm) was set to '${person.height}cm'`)
            console.log(`Old job (${oldJob}) was set to '${person.job}'`)
            MainMenu()
        })

    }).catch(()=> {
        console.log("Person could not be found!")
        MainMenu()
    })


    // Loop back to mainmenu
}

function DeleteFunction(){
    // ask for the id
    // deleteById(id) works but..
    // findByIdAndDelete
    // print the person they deleted
    // Loop back to mainmenu

    // EXT confirm that they want to delete this person
}

function NameSearchFunction(){
    // ask for the name
    
    // find({name})
    // print everyone found
    // Loop back to mainmenu
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