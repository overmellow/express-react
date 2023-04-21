const { Schema } = require("mongoose");

const UserSchema = new Schema({
    username: {type: String},
    password: {type: String}
})

module.exports = UserSchema;