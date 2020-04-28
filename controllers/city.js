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

// const addPost = (req, res) => {
//     db.Post.create(req.body ,(err, newPost) => {
//         if (err) {
//             return res.status(400).json({ status: 400, error: 'Something went wrong' });
//         }
//     db.City.findById(req.params.id, (err, foundCity) => {
//         if (err) {
//             return res.status(400).json({ status: 400, error: 'Something went wrond' })
//         }
//         foundCity.posts.push(newPost);
//         foundCity.save((err, savedPost) => {
//             if (err) {
//                 return res.status(400).json({ status: 400, error: 'Something is wrong' });
//             }
//             res.json(savedPost)
//         })
//     })
//     })
// }


const newAddPost = (req, res) => {
    db.Post.create(req.body, (err, newPost) => {
        if (err) {
            return res.status(400).json({ status: 400, error: 'Something went wrong' });
        }
        db.City.findById(req.params.cityId, (err, foundCity) => {
            if (err) {
                return res.status(400).json({ status: 400, error: 'Something went wrond' })
            }
            foundCity.posts.push(newPost);
            foundCity.save((err, savedPost) => {
                if (err) {
                    return res.status(400).json({ status: 400, error: 'Something is wrong' });
                }
                
            })

            db.User.findById(req.params.userId, (err, foundUser) => {
                foundUser.posts.push(newPost);
                foundUser.save((err, savedPost) => {
                    if (err) {
                        return res.status(400).json({ status: 400, error: 'Something is wrong' });
                    }
                    res.json(savedPost)
                })
            })
        })
  
    })
}

module.exports = {
    view,
    cityShow,
    newAddPost,
}
