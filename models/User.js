const {mongoose} = require('../config/database');

const userSchema = new mongoose.Schema({
    // note:  _id: true (enable) || false (disable),
    email: {
        type: String,
        unique: true
    },
    password: String
}, {
    statics: {
        findByEmail(email) {
            return this.findOne({email: new RegExp(email)})
        }
    }
});

const User = mongoose.model('User', userSchema);



module.exports = User
