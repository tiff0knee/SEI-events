const req = require('express/lib/request');
const res = require('express/lib/response');
const Event = require('../models/event');
const Student = require('../models/student');


function index(req,res) {
    Event.find({}, function (err, events){
        res.render('events/index', {title: 'All Events', events});
    })
}

function newEvent(req, res) {
      res.render('events/new', {event: 'Add Event'});
}

async function show(req,res) {
  const event = await Event.findById(req.params.id)
    res.render('events/show', {
        event: event
    });
}

function create(req,res){
//remove white space next to commas in topics
req.body.topics = req.body.topics.replace(/\s*,\s*/g, ',');
// split if it's not an empty string
if (req.body.topics) req.body.topics = req.body.topics.split(',');
const event = new Event(req.body);
event.save(function(error){
    if (error) return res.redirect('/events/new');
    console.log(event);
    //redirects to details of events after creating a new event
    res.redirect(`/events/${event._id}`);
});
}


async function deleteEvent (req, res) {
    console.log(req.params.id);
    await Event.findOneAndDelete(req.params.id);
    res.redirect('/events/index');
}

function update(req, res) {
    Event.findById(req.params.id, function (err, event){

        if(!event.user.equals(req.user._id)) return res.redirect('/events');
        res.render('events/edit', {event});
    });
}



module.exports = {
    new: newEvent,
    create,
    show,
    index,
    update,
    delete: deleteEvent,
};