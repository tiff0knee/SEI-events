const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//should have an event array with a list of events that each student has joined that is inside the student model

const eventSchema = new Schema({
    eventName: String,
    cohort: Number,
    date: Date,
    attendees: [String],
    topics: [String]},
    {
        timestamp: true,
    }
    
)

module.exports = mongoose.model('Event', eventSchema);