const Account = require('../models/Account')
const User = require('../models/User')

module.exports = {
  async index (request, response) {
    const { user_id } = request.headers
    const accounts = await Account.find({ user: user_id })

    return response.json(accounts)
  },

  async store (request, response) {
    const { 
      name,
      color,
      incDash,
      notifyInsert,
      currentBalance,
      initialBalance
    } = request.body
    const { user_id } = request.headers

    const user = await User.findById(user_id)

    if (!user) {
      return response.status(400).json({ error: 'User does not exists '})
    }

    const account = await Account.create({
      user: user_id,
      name,
      color,
      incDash,
      notifyInsert,
      currentBalance,
      initialBalance,
    })

    return response.json(account)
  }
}
