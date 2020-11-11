const mongoose = require('mongoose')

const AccountSchema = new mongoose.Schema({
  description: String,
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AccountsType'
  },
  // bankInst: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'BankingInstitution'
  // },
  color: String,
  incDash: Boolean,
  notifyInsert: Boolean,
  currentBalance: Number,
  initialBalance: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
})

module.exports = mongoose.model('Account', AccountSchema)