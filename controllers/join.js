
const Event = require('../models/event');
const Student = require('../models/student');

function create(req,res) {
    Event.findById(req.params.id, function(err, event){
        console.log(event);
        event.attendees.push(req.body);
        event.save(function(err){
            res.redirect(`/events/${event._id}`);
        });
    });
}

module.exports = {
    create
};