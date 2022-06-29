const mongoose = require("mongoose")

const mongoDB= mongoose.connect('', {
    useUnifiedTopology: true,
    useNewUrlParser: true,

}).then(
    () => console.log('DB connected...')
).catch(err => console.log(err))

module.exports = mongoDB;
