const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  // avatar: String,
  salt: String,
  availability: {
    type: Boolean,
    default: true
  }
})

module.exports = mongoose.model('User', UserSchema)