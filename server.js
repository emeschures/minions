const
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  PORT = process.env.PORT || 3000,
  MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/minions'

app.listen(PORT, (err) => {
  console.log(err || `Server running on ${PORT}.`)
})