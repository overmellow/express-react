var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({message: "Hey"})
});

// const MongoClient = require('mongodb').MongoClient

// const connctionString = 'mongodb://admin:admin@localhost:27017/?authMechanism=DEFAULT';

// let db;

// MongoClient.connect(connctionString, (err, client) => {
//   if (err) throw err
// }).then((client) => {
//   console.log("heyp")
//   db = client.db('mydb')
//   // db.collection('books').find().toArray().then((res) => console.log(res))
// })

// router.get('/mongodb', function(req, res, next) {   
//   MongoClient.connect(connctionString, (err, client) => {
//       if (err) throw err
//     }).then((client) => {
//       db = client.db('mydb')
//       // db.collection('books').find().toArray().then((res) => console.log(res))
//     }).then(() => {
//       db.collection('books').find().toArray().then((result) => {res.send(result);})
//     })
//   // db.collection('books').find().toArray().then((result) => {res.send(result);})
// })

module.exports = router;
