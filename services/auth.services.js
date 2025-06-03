const password_ = require('../utils/password');
const jwt = require('../utils/jwt');

const userService = require('../services/user.services');

exports.signup = async (email, password) => {
    try{
        const user = await userService.findByEmail(email)
        console.log("user:", user)
        if (user) {
            throw new Error('this email is availiable')
        }
        const hashedPassword = await password_.hashedPassword(password);
        await userService.create(email, hashedPassword);
    } catch (err) {
        throw err
    }
} 

exports.login = async (email, password) => {
    try {
        const user = await userService.findByEmail(email);
        const isHash = await password_.verifyPassword(password, user.password);
        if (!isHash) {
            throw new Error("wrong password");
        }
        const token = jwt.createToken(user);
        return token
    } catch (err) {
        throw err
    }

}
