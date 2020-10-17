const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://listen:OUunuZl4fhVOQOct@cluster0.0dnsc.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(routes)

app.use(express.json())

var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);