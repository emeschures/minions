const
  express = require('express'),
  minionsRouter = new express.Router(),
  minionsCtrl = require('../controllers/minions.js')

minionsRouter.route('/')
  .get(minionsCtrl.index)

module.exports = minionsRouter