const mongoose = require("mongoose")

const mongoDB= mongoose.connect('mongodb+srv://manishReddy:manish%40123@cluster0.xnkhp.mongodb.net/?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,

}).then(
    () => console.log('DB connected...')
).catch(err => console.log(err))

module.exports = mongoDB;