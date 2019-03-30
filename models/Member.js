const mongoose = require('mongoose')
const Schema = mongoose.Schema
const joi = require('joi')


const MemberSchema = new Schema({
   
    years_of_experience:{
        type:Number,
        required: true
    },skills:[{
        type:String,
        required:true
    }],
    interests:[{
        type:String,
        required:true
    }],
    notifications:[{
        type:String,
        required:true
    }]
})


module.exports = Members = mongoose.model('Member', MemberSchema)
