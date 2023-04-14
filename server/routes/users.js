var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  let users = [{id: 1, name: "jack"}, {id: 2, name: "joe"}, {id: 3, name: "james"}, {id: 4, name: "john"}]
  res.send(users);
});

module.exports = router;
