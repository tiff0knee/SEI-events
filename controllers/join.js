
const Event = require('../models/event');
const Student = require('../models/student');

function create(req,res) {
    Event.findById(req.params.id, function(err, event){
        //update req.body to contain attendee name
        console.log(req.body);
        event.attendees.push(req.body);
        event.save(function(err){
            res.redirect(`/events/${event._id}`);
        });
    });
}

module.exports = {
    create
};