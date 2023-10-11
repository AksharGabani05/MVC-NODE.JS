const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    name : String,
    password : Number,
    email : String
})

const users = mongoose.model("user" , userschema)

module.exports = users