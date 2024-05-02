const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:12348765@cluster0.vjcfw4z.mongodb.net/Paytm')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 5,
        maxLength: 30
    },

    firstName: {
        type: String,
        required: true,
        maxLength: 15,
        trim: true
    },
    
    lastName: {
        type: String,
        required: true,
        maxLength: 15,
        trim: true
    },
    
    password: {
        type: String,
        required: true,
        minLength: 6
    }
})

const Users = mongoose.model('Users', UserSchema);

module.exports = {
    Users
}
