const mongoose = require('mongoose')
const Post = require('./Post')

const CitySchema = mongoose.Schema({
  name: {
      type: String,
      required: [true, 'Name is required']
  } ,

  description: String,

  image: String,

  posts:[Post.schema]
})


const City = mongoose.model('City', CitySchema)

module.exports = City;

