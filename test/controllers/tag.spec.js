const chai = require('chai')
const http = require('chai-http')
const subSet = require('chai-subset')

const app = require('../../app')

chai.use(http)
chai.use(subSet)

const TagSchema = {
  description: description => description,
  user: user => user
}

describe('Tags tests', () => {
  it ('Store a tag', () => {
    chai.request(app.app)
      .post('/tags')
      .set('user_id', '5f8f9df59587182e8f21fd51')
      .send({
        description: 'Negócios'
      })
      .end((error, response) => {
        chai.expect(error).to.be.null
        chai.expect(response).to.have.status(201)
        chai.expect(response.body).to.containSubset(TagSchema)
      })
  })

  it ('Get tags', () => {
    chai.request(app.app)
      .get('/tags')
      .end((error, response) => {
        chai.expect(error).to.be.null
        chai.expect(response).to.have.status(200)
        chai.expect(response.body).to.containSubset([TagSchema])
      })
  })
})