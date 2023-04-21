var express = require('express');
var router = express.Router();

const mongoose = require("mongoose");

const BookSchema = require('../models/BookSchema');
const BookModel = mongoose.model('Book', BookSchema);

// let books = [
//   {id: 1, title: "java", ISBN: "123"}, 
//   {id: 2, title: "js", ISBN: "456"}, 
//   {id: 3, title: "express", ISBN: "789"}, 
//   {id: 4, title: "mongo", ISBN: "101"}
// ]

/* GET users listing. */
router.get('/', function(req, res, next) {
  BookModel.find().then((results) => {
    res.send(results);
  });
});

router.post('/', function(req, res, next) {
  let book = req.body.book;
  const instance = new BookModel();
  instance.id = book.id;
  instance.title = book.title;
  instance.ISBN = book.ISBN;
  instance.save().then(() => {
    res.send({message: book.title + ' book added!', book: book});
  });  
});

router.delete('/:id', function(req, res, next) {
  BookModel.deleteOne({id: req.params.id}).then(() =>{
    res.send({message: 'successful'});
  })
});




module.exports = router;
