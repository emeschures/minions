const Minion = require('../models/Minion.js')

module.exports = {
  index: (req, res) => {
    Minion.find({}, (err, allTheMinions) => {
      res.json(allTheMinions)
    })
  },

  create: (req, res) => {
    Minion.create(req.body, (err, savedMinion) => {
      res.json({ success: true, message: "Minion created.", minion: savedMinion })
    })
  },

  show: (req, res) => {
    Minion.findById(req.params.id, (err, thatMinion) => {
      res.json(thatMinion)
    })
  },

  update: (req, res) => {
    Minion.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedMinion) => {
      res.json({ success: true, message: "Minion updated.", minion: updatedMinion })
    })
  },

  destroy: (req, res) => {
    Minion.findByIdAndRemove(req.params.id, (err, deletedMinion) => {
      res.json({ success: true, message: "Minion deleted." })
    })
  }
}