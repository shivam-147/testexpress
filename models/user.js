const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://shiva147m:Shiva%40m123@notesapp.dt09f.mongodb.net/?retryWrites=true&w=majority&appName=notesapp/testexpress")

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number
}, { timestamps: true })

module.exports = mongoose.model('user', userSchema)