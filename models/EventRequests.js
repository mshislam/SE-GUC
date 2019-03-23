const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventrequestschema= new Schema({
    organizer:{
        type: String,
        required: true
    },
    isAccepted:{
        type: Boolean,
        required: false
    }
})

module.exports= EventRequests= mongoose.model('eventrequests',eventrequestschema)