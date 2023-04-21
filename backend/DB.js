const MongoClient = require('mongodb').MongoClient

const connctionString = 'mongodb://admin:admin@localhost:27017/?authMechanism=DEFAULT';



const db = function (req, res, next) {
    MongoClient.connect(connctionString, (err, client) => {
        if (err) throw err
      }).then((client) => {
        db = client.db('mydb')
        // db.collection('books').find().toArray().then((res) => console.log(res))
      }).then(() => {
        db.collection('books').find().toArray().then((res) => console.log(res))
      })
}

module.exports = db;