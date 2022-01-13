var express = require('express');
var router = require('express').Router();
var joinCtrl = require('../controllers/join');

router.post('/:id', joinCtrl.create);
 
module.exports = router;