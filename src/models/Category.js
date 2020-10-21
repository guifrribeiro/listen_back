const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
  description: String,
  color: String,
  icon: String,
  type: {
    type: String,
    enum: ['EXP', 'INC'],
    default: 'EXP',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model('Category', CategorySchema)