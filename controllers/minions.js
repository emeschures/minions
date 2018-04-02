const Minion = require('../models/Minion.js')

module.exports = {
  index: (req, res) => {
    Minion.find({}, (err, allTheMinions) => {
      res.json(allTheMinions)
    })
  },

  create: (req, res) => {
    Minion.create(req.body, (err, savedMinion) => {
      if(err) return res.json({ success: false })
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
      if(err) return res.json({ success: false })
      res.json({ success: true, message: "Minion updated.", minion: updatedMinion })
    })
  },

  destroy: (req, res) => {
    Minion.findByIdAndRemove(req.params.id, (err, deletedMinion) => {
      if(err) return res.json({ success: false })
      res.json({ success: true, message: "Minion deleted." })
    })
  }
}