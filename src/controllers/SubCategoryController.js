const Category = require('../models/Category')
const SubCategory = require('../models/SubCategory')

module.exports = {
  async index (request, response) {
    const subcategories = await SubCategory.find({})

    return response.json(subcategories)
  },

  async store (request, response) {
    const { description, category_id } = request.body

    const category = await Category.findById(category_id)

    if (!category) {
      return response.status(400).json({ error: 'Category does not exists '})
    }

    const subcategory = await SubCategory.create({
      category: category_id,
      description
    })

    return response.json(subcategory)
  }
}