const db = require('../models')

const view = (req, res) => {
    db.City.find({}, (err, allCities) => {
        if (err) return res.status(500).json({
            status: 500,
            message: 'Something went wrong. Please try again.'
        })
        return res.json(allCities)
    })
}

const cityShow = (req, res) => {
    db.City.findById(req.params.id, (err, City) => {
        if (err) return res.status(500).json({
            status: 500,
            message: 'Something went wrong. Please try again.'
        })
        return res.json(City)
    })
}

module.exports = {
    view,
    cityShow,
}