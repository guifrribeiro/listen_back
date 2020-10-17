const mongoose = require('mongoose')

const AccountSchema = new mongoose.Schema({
  name: String,
  // type: String,
  color: String,
  incDash: Boolean,
  notifyInsert: Boolean,
  currentBalance: Number,
  initialBalance: Number,
  // expenses: Number,
  // revenues: Number,
  // transfers: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
})

module.exports = mongoose.model('Account', AccountSchema)