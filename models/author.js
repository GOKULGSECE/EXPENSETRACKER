const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/blogs").then(()=>console.log("DB  author.js connected")).catch(()=>console.log("not connected"))
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;
const author = new Schema({
    //"objectid":Objec,
    name:String,
    email:String
})
// const  author = new Author({
//     name:Math.random().toString(),
//     email:Math.random().toString()
// })
// author.save().then(()=>console.log("Author Created"))
const author1 = mongoose.model('Author',author)
//console.log(authorModel.find({}).then((data)=>console.log(data)));

module.exports = author1