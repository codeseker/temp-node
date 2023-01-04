const jwt = require("jsonwebtoken");
require("dotenv").config();


const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400).json({ msg: `Please provide proper information...`, success: false });
        return;
    }
    console.log(req.body);
    const token = jwt.sign({ username, id: Date.now() }, process.env.JWT_SECRET, { expiresIn: '30d' });
    res.status(200).json({ msg: "user created", token: token });
}

const dashboard = async (req, res) => {
    console.log(req.user);
    const luckyNumber = Math.floor(Math.random() * 100);
        res.status(200).json({ msg: `Hello ${req.user.username}`, secret: `Your lucky number is: ${luckyNumber}` });
}

module.exports = {
    login,
    dashboard
}