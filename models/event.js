const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//should have an event array with a list of events that each student has joined that is inside the student model


const attendeesSchema = new Schema({
    attendeeName: String

})

const eventSchema = new Schema({
    creator: String,
    eventName: String,
    cohort: Number,
    date: {type: Date, 
    default() {
        return new Date.getFullYear();
    }},
    topics: [String],
    attendees: [attendeesSchema]},

    {
        timestamps: true,
    }
    
)


module.exports = mongoose.model('Event', eventSchema);