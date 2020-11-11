const Transaction = require('../models/Transaction')
const Category = require('../models/Category')
const SubCategory = require('../models/SubCategory')
const Account = require('../models/Account')
const User = require('../models/User')

module.exports = {
  async index (request, response) {
    const transactions = await Transaction.find({})

    return response.json(transactions)
  },

  async store (request, response) {
    const { user_id } = request.headers
    
    const user = await User.findById(user_id)

    if (!user) {
      return response.status(400).json({ error: 'User does not exists' })
    }

    const { category_id, subcategory_id, account_id } = request.body

    const category = await Category.findById(category_id)
    const account = await Account.findById(account_id)

    if (!category || !account) {
      return response.status(400).json({ error: 'Some properties do not exists' })
    }

    const { description, amount, date, fixed, repeat, note, remind, concluded } = request.body

    const transaction = await Transaction.create({
      user: user_id,
      category: category_id,
      subcategory: subcategory_id || null,
      account: account_id,
      description,
      amount,
      date,
      fixed,
      repeat,
      note,
      remind,
      concluded,
    })

    return response.json(transaction)
  }
}