const mongoose = require('../config/database');

const userSchema = new mongoose.Schema({
    // note:  _id: true (enable) || false (disable),
    email: String,
    password: String
}, {
    statics: {
        findByEmail(email) {
            return this.find({email: new RegExp(email)})
        }
    }
});

const User = mongoose.model('User', userSchema);

exports.module = User
