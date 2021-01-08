const Tag = require('../models/Tag')
const User = require('../models/User')

module.exports = {
  async index (request, response) {
    const tags = await Tag.find({})

    return response.json(tags)
  },

  async store (request, response) {
    const { user_id } = request.headers

    const user = await User.findById(user_id)

    if (!user) {
      return response.status(400).json({ error: 'User does not exists '})
    }

    const { description } = request.body

    const tag = await Tag.create({
      user: user_id,
      description,
    })

    return response.status(201).json(tag)
  },

  async update (request, response) {
    const { user_id } = request.headers
    const user = await User.findById(user_id)

    if (!user) {
      return response.status(400).json({ error: 'User does not exists '})
    }

    const { tag_id } = request.params
    const tag = await Tag.findById(tag_id)

    if (!tag) {
      return response.status(400).json({ error: 'Tag does not exists '})
    }

    const { description } = request.body

    const newTag = await Tag.findByIdAndUpdate(tag_id, { $set: {
      description: description,
    }})

    return response.json(newTag)
  },
}