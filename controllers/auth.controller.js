const authService = require('../services/auth.services')
const password_ = require('../utils/password');

exports.signup = async (req, res) => {
    try {
        const {email, password} = req.body;
        await authService.signup(email, password);
        res.status(200).json({"message": "signup success"})
    } catch (err) {
        res.status(500).json({"message": "signup failed" + err})
    }
}

exports.login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const token = await authService.login(email, password);
        res.cookie("token", token, {
            maxAge: 60 * 60 * 1000,
            secure: true,
            httpOnly: true,
            sameSite: "lax",
        });
        res.status(200).json({"message": "login success"})
    } catch (err) {
        res.status(500).json({"message": "login failed" + err})
    }
}

exports.logout = async (req,res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: true,
            sameSite: "lax"
        })
        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


