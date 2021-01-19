const User = require('../models/User')
const pass = require('../functions/crypto')

module.exports = {
  async store (request, response) {
    const { 
      name,
      username,
      email,
      password } = request.body

    try {
      cryPass = pass.generatePass(password)
      let user = await User.findOne({ email })

      if (!user) {
        user = await User.create({
          name,
          username,
          email,
          password: cryPass.hash,
          salt: cryPass.salt
        })
      }
      else {
        return response.status(400).json({ message: 'The user already exists.' })
      }

      return response.json(user)
    } catch (error) {
      return response.json({ 'Several error ': error})
    }
  }
}