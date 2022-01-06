var express = require('express');
var router = express.Router();
var studentsCtrl = require('../controllers/students');

/* GET students listing. */
router.get('/students', studentsCtrl.index);



module.exports = router;
