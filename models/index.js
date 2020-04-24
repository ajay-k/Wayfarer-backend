const mongoose = require('mongoose')
const dbUrl = process.env.MONGO_URI;


// connect to the DB
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})
   .then(() => console.log('MongoDB connected....'))
   .catch(err => console.log(`MongoDB connection error: ${err}`))

module.exports = {User: require('./User')}