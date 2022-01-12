var express = require('express');
var router = require('express').Router();
var eventsCtrl = require('../controllers/events');


/* GET events listing. */
router.get('/index', eventsCtrl.index);



router.post('/', eventsCtrl.create);




//create new event
router.get('/new', eventsCtrl.new);


//update the details of an event
router.put('/:id', eventsCtrl.update);

//delete event
router.get('/', eventsCtrl.delete);

//show details of event
router.get('/:id', eventsCtrl.show);
module.exports = router;
