const express = require('express');

const signupHandler = require("../controllers/signupController");
const loginHandler = require("../controllers/loginController");

const router = express.Router();

router.route("/login")
    .post(signupHandler)

router.route("/login")
    .post(loginHandler)

module.exports = router; 