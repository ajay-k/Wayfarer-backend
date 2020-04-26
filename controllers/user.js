const db = require('../models')

const view = (req, res) => {
    db.User.findById(req.params.id, (err, foundUser) => {
        if (err) return res.status(500).json({
            status: 500,
            message: 'Something went wrong. Please try again.'
        })
        return res.json(foundUser)
    })
}

const update = (req, res) => {

    db.User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedProfile) => {
        if (err) {
            return res.status(400).json({ status: 400, error: 'Something went wrong' });
        }
        console.log(updatedProfile);
        // res.json(updatedProfile);
        return res.json(updatedProfile)
    })
}

const newPost = (req, res) => {
    db.Post.create(req.body, (err, newPost) => {
        if(err){
            return res.status(400).json({ status: 400, error: 'Something went wrong' });
        }
        db.User.findById(req.params.id, (err, foundUser) => {
            if(err){
                return res.status(400).json({ status: 400, error: 'Something went wrond' })
            }
            foundUser.posts.push(newPost);
            foundUser.save((err, savedPost) => {
                if (err) {
                    return res.status(400).json({ status: 400, error: 'Something is wrong' });
                }
                res.json(savedPost)
            })
        })
    })
}




module.exports = {
    view,
    update,
    newPost,
}