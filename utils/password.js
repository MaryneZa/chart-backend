const bcrypt = require('bcrypt');

exports.hashedPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword
    } catch (err) {
        throw err
    }

}

exports.VerifyPassword = async (password, hashedPassword) =>{
    try {
        const isHash = await bcrypt.compare(password, hashedPassword);
        return isHash
    } catch (err) {
        throw err
    }
} 
