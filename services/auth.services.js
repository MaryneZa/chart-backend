const password_ = require('../utils/password')
const jwt = require('../utils/jwt')

const userService = require('../services/user.services')

exports.signup = async (email, password) => {
    try{
        const user = await userService.findByEmail(email)
        if (user) {
            throw new Error('this email is not availiable')
            
        }
        const hashedPassword = password_.hashedPassword(password);
        await userService.create({email: email, password: hashedPassword })
    } catch (err) {
        throw err
    }
} 

exports.login = (email, password) => {
    try {
        const user = userService.findByEmail(email);
        const isHash = password_.verifyPassword(password, user.password);
        if (!isHash) {
            throw new Error("wrong password");
        }
        const token = jwt.createToken(user);
        return token
    } catch (err) {
        throw err
    }

}
