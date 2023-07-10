const mongoose = require("mongoose")

const peopleSchema = new mongoose.Schema({
    name:String,
    age:Number,
    height:Number,
    job:String
})
 
// represents the collection on the database server. as js object
const peopleModel = mongoose.model("people", peopleSchema)

module.exports = peopleModel