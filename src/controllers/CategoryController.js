const User = require('../models/User')
const Category = require('../models/Category')

module.exports = {
  async index (request, response) {
    const categories = await Category.find({})

    return response.json(categories)
  },

  async store (request, response) {
    const user_id = request.userId
    
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
  },

  async update (request, response) {
    const user_id = request.userId
    const user = await User.findById(user_id)

    if (!user) {
      return response.status(400).json({ error: 'User does not exists '})
    }

    const { category_id } = request.params
    const category = await Category.findById(category_id)

    if (!category) {
      return response.status(400).json({ error: 'Category does not exists '})
    }

    const { description, color, icon, type } = request.body

    const newCategory = await Category.findByIdAndUpdate(category_id, { $set: {
      description: description,
      color: color,
      icon: icon,
      type: type,
    }})

    return response.json(newCategory)
  }
}