const mongoose = require('mongoose')


const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Name is required']
    },
    content: {
        type: String,
        required: [true, 'Name is required']
    },
    image: {
        type: String,
    }
})


const Post = mongoose.model('Post', PostSchema)

module.exports = Post