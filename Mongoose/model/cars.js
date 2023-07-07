const mongoose = require("mongoose")

// schema is limitations on me creating
const carSchema = new mongoose.Schema({
    reg:String,
    age:{type:Number, required:true},
    make:String,
    model:String,
    colour:String
})
 
//                   collection name, blueprint of each doc,
const carModel = mongoose.model("car", carSchema)

async function setupTestData(){
    await carModel.deleteMany({})
    
    await carModel.create({   
        reg:"Hello",
        age:0,
        make:"Hello",
        model:"Hello",
        colour:"Hello"
    })

    await carModel.create({   
        reg:"Good",
        age:1,
        make:"Good",
        model:"Good",
        colour:"Good"
    })

    await carModel.create({   
        reg:"Bye",
        age:2,
        make:"Bye",
        model:"Bye",
        colour:"Bye"
    })
}

module.exports = {carModel}