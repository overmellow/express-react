var express = require('express');
var router = express.Router();

// var users = require('../usersDB');

const mongoose = require("mongoose");

const UserSchema = require('../models/UserSchema');
const UserModel = mongoose.model('User', UserSchema);

// let users = [{"id": 1, "username":"mori","password":"1000"},{"id": 2, "username":"jack","password":"2000"}]

/* GET users listing. */
router.get('/', function(req, res, next) {
  UserModel.find().then(users => res.send(users))
  // res.send(users);
});

module.exports = router;
