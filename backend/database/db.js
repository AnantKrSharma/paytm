const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:12348765@cluster0.vjcfw4z.mongodb.net/Paytm')

const UserSchema = new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    password: String
})

const Users = mongoose.model('Users', UserSchema);

module.exports = {
    Users
}
