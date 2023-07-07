const mongoose = require("mongoose")

// schema is limitations on me creating
const petSchema = new mongoose.Schema({
    name:String,
    colour:String
})
 
//                   collection name, blueprint of each doc,
const petModel = mongoose.model("pet", petSchema)

module.exports = petModel