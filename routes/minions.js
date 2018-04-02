const
  express = require('express'),
  minionsRouter = new express.Router(),
  minionsCtrl = require('../controllers/minions.js')

minionsRouter.route('/')
  .get(minionsCtrl.index)
  .post(minionsCtrl.create)

minionsRouter.route('/:id')
  .get(minionsCtrl.show)
  .patch(minionsCtrl.update)
  .delete(minionsCtrl.destroy)

module.exports = minionsRouter