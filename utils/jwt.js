var config = require('../config/config')
var jwt = require('jsonwebtoken');

exports.createToken = (user) => {
    try {
        const token = jwt.sign({
            userId: user._id
        }, config.development.jwt_secret, { expiresIn: '1h' });
        return token
    } catch (err) {
        throw err
    }
}

exports.verifyToken = (token) => {
    try {
        const decode = jwt.verify(token, config.development.jwt_secret);
        return decode
    } catch (err) {
        console.error('Error verify token:', err)
        throw err
    }
}