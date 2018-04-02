const Minion = require('../models/Minion.js')

module.exports = {
  index: (req, res) => {
    Minion.find({}, (err, allTheMinions) => {
      res.json(allTheMinions)
    })
  }
}