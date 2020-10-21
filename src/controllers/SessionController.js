const User = require('../models/User')

module.exports = {
  async store (request, response) {
    const { email } = request.body

    try {
      let user = await User.findOne({ email })

      if (!user) {
        user = await User.create({ email })
      }

      return response.json(user)
    } catch (error) {
      return response.json({ 'Several error ': error})
    }
  }
}