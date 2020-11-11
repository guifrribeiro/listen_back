const AccountsType = require('../models/AccountsType')

module.exports = {
  async index (request, response) {
    const accountsTypes = await AccountsType.find({})
    return response.json(accountsTypes)
  },

  async store (request, response) {
    const { description } = request.body

    const accountsType = await AccountsType.create({
      description
    })

    return response.json(accountsType)
  }
}