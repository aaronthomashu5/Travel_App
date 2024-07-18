const express = require('express');
const router = express.Router();

const categoryRouter = require("../controllers/categoryController");
router.route("/")
    .get(categoryRouter)

module.exports = router;