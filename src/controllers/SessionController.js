const User = require('../models/User')

module.exports = {
  async store (request, response) {
    const { email } = request.body

    let user = await User.findOne({ email })

    if (!user) {
      return response.status(401).json({ error: 'User was not founded!' })
    }

    return response.json(user)
  }
}