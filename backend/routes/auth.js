var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
// const session = require('express-session');

const mongoose = require("mongoose");

const UserSchema = require('../models/UserSchema');
const UserModel = mongoose.model('User', UserSchema);

const JWT_SECRET = require('../JWT_SECRET');

// let users = require('../usersDB');

const doesExist = async (username) => {
  let result = await UserModel.exists({ username: username})
  return result != null;
}

const authenticatedUser = async (username, password) => {
  let result = await UserModel.exists({ username: username, password: password })
  return result != null;
}

router.post("/login", (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.status(404).json({ message: "Error logging in" });
  }
  authenticatedUser(req.body.username, req.body.password).then(result => {
    if(result != null && result) {
      res.json({
        token: jwt.sign({ user: 'user' }, JWT_SECRET)
      })
    }
    else {
      res.status(401).json({ message: "Invalid Login. Check username and password" });
    }
  })
});

router.post("/signup", (req, res) => {
  if (req.body.username && req.body.password) {
    doesExist(req.body.username)
      .then(result => {
        if(!result) {
          const instance = new UserModel();
          instance.username = req.body.username;
          instance.password = req.body.password;
          instance.save().then(() => {
            res.status(200).json({ message: "User successfully registred. Now you can login" });
          });
        }
        else {
          res.status(404).json({ message: "User already exists!" });
        }
    })
  }
});

module.exports = router;