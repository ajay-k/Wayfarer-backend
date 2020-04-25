const db = require('../models')

const view = (req, res) => {
    db.User.findOne({username : req.body.username}, (err, foundUser) => {
        if (err) return res.status(500).json({
            status: 500,
            message: 'Something went wrong. Please try again.'
        })
        return res.json(foundUser)
    })
}

const update = (req, res) => {

    db.User.findOneAndUpdate(req.body.username, req.body, {new: true}, (err, updatedProfile) => {
        if (err) {
            return res.status(400).json({ status: 400, error: 'Something went wrong' });
        }
        console.log(updatedProfile);
        res.json(updatedProfile);
    })
}


module.exports = {
    view,
    update,
}