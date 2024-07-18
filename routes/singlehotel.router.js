const express = require('express');
const router = express.Router();

const singlehotelHandler = require("../controllers/singleHotelController")
const Hotel = require("../model/hotel.model")

router.route("/:id")
    .get(singlehotelHandler )
module.exports = router;