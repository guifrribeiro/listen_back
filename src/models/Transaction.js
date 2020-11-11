const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
  description: String,
  amount: Number,
  date: Date,
  fixed: Boolean,
  repeat: Boolean,
  note: String,
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tag',
    }
  ],
  remind: {
    type: Date,
    required: false
  },
  concluded: Boolean,
  type: {
    type: String,
    enum: ['EXP', 'INC'],
    default: 'EXP',
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubCategory',
  },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
  },
})

module.exports = mongoose.model('Transaction', TransactionSchema)