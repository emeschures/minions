const
  express = require('express'),
  minionsRouter = new express.Router()

minionsRouter.route('/')
  .get((req, res) => {
    res.json({ message: "Minions API root." })
  })

module.exports = minionsRouter