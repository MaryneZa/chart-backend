exports.authMiddleWare = (req, res, next) => {
   const token = req.cookies.token;
    try {
        const decode = jwt.verifyToken(token)
        req.userId = decode.userId
        next()
    } catch (error) {
        res.status(401).json({ error: 'Invalid token:' });
    }
}

module.exports = authMiddleware