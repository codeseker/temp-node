require("dotenv").config();
const jwt = require("jsonwebtoken");
const authorizationMiddleWare = async (req, res, next)=>{
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ msg: "Token is not provided" });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const {id, username} = decoded;
        req.user = {id, username};
        next();
    } catch (error) {
        console.log(error)
        return res.status(401).json({ msg: "Unauthorized user..." , error: error})
    }
}

module.exports = authorizationMiddleWare;