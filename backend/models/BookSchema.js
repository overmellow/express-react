const { Schema } = require("mongoose");

const Book = new Schema({
    id: {type: String},
    title: {type: String},
    ISBN: {type: String}
})

module.exports = Book;