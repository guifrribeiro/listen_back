const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

const app = express()

mongoose.connect('mongodb+srv://listen:OUunuZl4fhVOQOct@cluster0.0dnsc.gcp.mongodb.net/lst00001?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

app.use(cors())
app.use(express.json())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(routes)

app.listen(process.env.PORT || 3000);

module.exports = { app }