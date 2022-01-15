
var router = require('express').Router();
var studentsCtrl = require('../controllers/students');


/* GET students listing. */
router.get('/', studentsCtrl.index);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

//show student details
router.get('/', studentsCtrl.show);

module.exports = router;
