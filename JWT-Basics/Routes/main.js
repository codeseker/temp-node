const express = require("express");
const router = express.Router();
const authorizationMiddleWare = require("../Middleware/auth")
const {login, dashboard} = require("../Controllers/main");

router.route("/login").post(login);
router.route("/dashboard").get(authorizationMiddleWare, dashboard);


module.exports = router;