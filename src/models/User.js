const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  // avatar: String,
})

module.exports = mongoose.model('User', UserSchema)