const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adminSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports= Admin=mongoose.model('Admin',adminSchema)