const express = require('express')
const mongoose = require('mongoose')
const path = require ('path')

const app = express()

mongoose.connect('mongodb+srv://listen:OUunuZl4fhVOQOct@cluster0.0dnsc.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.json())

app.listen(3000)