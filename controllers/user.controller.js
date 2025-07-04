const userService = require('../services/user.services')

exports.getMe = async (req, res) => {
    try {
        const id = req.userId;
        const user = await userService.findById(id);
        res.status(200).json({"user": user })
    } catch (err) {
        res.status(500).json({"error" : err })
    }
}