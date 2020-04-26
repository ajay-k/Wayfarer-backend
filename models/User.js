const mongoose = require('mongoose')
const City = require('./City')
const Post = require('./Post')


const UserSchema = mongoose.Schema({
    name: String,
    
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    city: String,

    posts: [Post.schema]

    
})


const User = mongoose.model('User', UserSchema)


module.exports = User