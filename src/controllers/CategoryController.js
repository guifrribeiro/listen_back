const User = require('../models/User')
const Category = require('../models/Category')

module.exports = {
  async index (request, response) {
    const categories = await Category.find({})

    return response.json(categories)
  },

  async store (request, response) {
    const { user_id } = request.headers
    
    const user = await User.findById(user_id)

    if (!user) {
      return response.status(400).json({ error: 'User does not exists '})
    }

    const { description, color, icon, type } = request.body
    const category = await Category.create({
      user: user_id,
      description,
      color,
      icon,
      type,
    })

    return response.json(category)
  }
}