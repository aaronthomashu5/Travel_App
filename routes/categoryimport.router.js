const express = require('express');

const Category = require("../model/category.model");
const categories = require("../data/categories");

const router = express.Router();

router.route("/")
    .post(async (req, res) => {
        try{
            // await Category.remove(); //why is this throwing an error???
            const categoriesInDB = await Category.insertMany(categories.data)
            res.json(categoriesInDB)
        }catch(err){
            console.log(err);
            res.json({ message: "Could not add category data to DB"})
        }
    })

module.exports = router;