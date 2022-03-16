const express = require('express')
const router = express.Router();

const Product = require("../models/product"); 
let prod = new Product();


//Meals Package page route
router.get("/mealsPackage",(req,res)=>
{
    res.render("product/package",{
        title: "Meal Package",
        data: prod.getPackagedMeal()
        
    })
});


module.exports = router;
