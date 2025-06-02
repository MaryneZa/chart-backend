const User = require('../models/User')

exports.create = (email, password) => User.create({email: email, password: password})

exports.findByEmail = async (email) => await User.findByEmail(email)

exports.findById = async (id) => await User.findOne({ _id: id })