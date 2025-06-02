const User = require('../models/User')

exports.create = (email, password) => User.create({email: email, password: password})

exports.findByEmail = async (email) => await User.findByEmail(email)