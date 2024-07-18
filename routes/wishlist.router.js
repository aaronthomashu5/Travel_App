const express = require('express');

const router = express.Router();

const Wishlist = require("../model/wishlist.model");
const verifyUser = require("../middleware/verifyUser");

const wishlistController = require("../controllers/wishlistController")

const  {createWishlistHandler, deleteWishlistHandler, getWishlistHandler} = wishlistController;

router.route("/")
    .post(verifyUser, createWishlistHandler)


router.route("/:id")
    .delete(verifyUser, deleteWishlistHandler)

router.route("/")
    .get(verifyUser, getWishlistHandler)
module.exports = router;