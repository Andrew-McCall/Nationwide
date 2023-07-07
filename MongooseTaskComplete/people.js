const mongoose = require("mongoose")

const peopleSchema = new mongoose.Schema({
    name:String,
    age:Number,
    height:Number,
    job:String
})
 

const peopleModel = mongoose.model("people", peopleSchema)

module.exports = peopleModel