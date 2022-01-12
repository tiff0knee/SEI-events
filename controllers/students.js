const Student = require('../models/student');

//need to require the events model
const Event = require('../models/event');

function show(req, res) {
    Student.findById(req.params.id)
    .populate('cast').exec(function(err, movie){
        res.render('students/show', { student: 'Student Name', student, title: 'Show'});

    });
}



//the index is querying the student model and providing the array of students to the student.index view
function index(req, res, next) {
  console.log(req.user)
  // Make the query object to use with Student.find based up
  // the user has submitted the search form or now
  //regex is a fancy way to format the string
  //if nothing can be found, then nothing is returned

  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  Student.find(modelQuery)
  .sort(sortKey).exec(function(err, students) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('students/index', {
      students,
      user: req.user,
      name: req.query.name,
      sortKey
    });
  });
}

module.exports = {
    index,
  };