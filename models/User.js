const mongoose = require('mongoose')
const City = require('./City')


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
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
})


const User = mongoose.model('User', UserSchema)


module.exports = User