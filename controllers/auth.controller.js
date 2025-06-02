const authService = require('../services/auth.services')

exports.signup = async (req, res) => {
    try {
        const {email, password} = req.body;
        // password
        await authService.signup(email, hashPassword);
        res.status(200).json({"message": "signup success"})
    } catch (err) {
        res.status(500).json({"message": "signup failed"})
    }
}

exports.login = async (req, res) => {
    try{
        const {email, password} = req.body;

        res.status(200).json({"message": "login success"})
    } catch (err) {
        res.status(500).json({"message": "login failed"})
    }
}