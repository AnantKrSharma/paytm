const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:12348765@cluster0.vjcfw4z.mongodb.net/Paytm')

// Users collection schema
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
});

// Account collection schema
const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,  // reference to the 'Users' model.
        ref: 'Users',
        required: true
    },

    username: {
        type: String,
        required: true
    },

    balance: {
        type: Number,
        required: true
    }
});


const Users = mongoose.model('Users', UserSchema);

const Account = mongoose.model('Account', accountSchema) 


module.exports = {
    Users, Account
}
