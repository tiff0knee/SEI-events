var express = require('express');
var router = require('express').Router();
var joinCtrl = require('../controllers/join');

router.put('/:id', joinCtrl.create);
 
module.exports = router;