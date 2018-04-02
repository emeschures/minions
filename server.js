const
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  PORT = process.env.PORT || 3001,
  MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/minions',
  minionsRouter = require('./routes/minions.js')

mongoose.connect(MONGODB_URI, (err) => {
  console.log(err || `Connected to MongoDB.`)
})

app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({ message: 'root route.' })
})

app.use('/api/minions', minionsRouter)

app.listen(PORT, (err) => {
  console.log(err || `Server running on ${PORT}.`)
})