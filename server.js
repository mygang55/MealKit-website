const express = require("express");
const exphbs = require("express-handlebars");

const bodyParser = require('body-parser');

//load the environmnet variable file 
require('dotenv').config({path:"./config/keys.env"});

const app =express();

//const Product = require("./models/Product"); 
//let prod = new Product();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//to use static data such as css, img
app.use(express.static("public"));

//this tells express to make form data available via req.body in ever request
app.use(bodyParser.urlencoded({extended: false}));


//load controllers
const generalController = require("./controllers/general");
const productController = require("./controllers/product");

app.use("/", generalController);
app.use("/product", productController);


const PORT = process.env.PORT ;
app.listen(PORT,()=>
{
    console.log("The Webserver is ready to run.");
});