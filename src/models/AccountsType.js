const mongoose = require('mongoose')

const AccountsTypeSchema = new mongoose.Schema({
  description: String
})

module.exports = mongoose.model('AccountsType', AccountsTypeSchema)