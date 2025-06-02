const User = require('../models/User')

exports.signup = async (email, password) => await User.create({email: email, password: password })

exports.login = (email, password) => {

}
