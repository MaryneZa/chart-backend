const User = require('../models/User')

exports.findByEmail = async (email) => await User.findByEmail(email)