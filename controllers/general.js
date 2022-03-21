//jshint esversion:6
const express = require('express');
const router = express.Router();

const Product = require("../models/product"); 
let prod = new Product();

//home page route
router.get("/",(req,res)=>
{
    res.render("general/home",{
        title: "Home",
        data: prod.getTopMeal()
    });
});

//customer registration page route
router.get("/customerRegistration",(req,res)=>
{
    res.render("general/registration",{
        title: "Registration"
    });
});

//login page route
router.get("/login",(req,res)=>
{
    res.render("general/login",{
        title: "Sign In"
    });
});


router.get("/dashboard", (req,res)=>
{
    res.render("general/dashboard",{
        title: "Dashboard"
    });
});

router.post("/customerRegistration",(req,res)=>
{
    const errors=[];

    //validate input
    if(req.body.fname=="")
    {
        errors.push("You must enter First Name");
    }

    if(req.body.lname=="")
    {
        errors.push("You must enter Last Name");
    }

    if(req.body.email=="")
    {
        errors.push("You must enter an Email");
    }

    if(req.body.password=="")
    {
        errors.push("You must enter password");
    }
    else
    {
        const regex = /^[A-Za-z]\w{6,12}$/;
        const correct = req.body.password.match(regex);
        if(correct==null)
        {
            errors.push("Password must contains letters and numbers only, length between 6 to 12 !");
        }
    }


    if(errors.length > 0) //means error occured 
    {
        res.render("general/registration",{
            title:"Registration",
            errorMessages: errors
        });
    }
    else
    {
        const {fname,lname,email,password} = req.body;
        
       // using Twilio SendGrid's v3 Node.js Library             
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
        const msg = 
        {
          to: `${email}`,
          from: `mygang1120@gmail.com`,
          subject: 'Welcome to Live Fit Food!',         
          html: 
          `Please double check your information!<br>
           Name: ${fname} ${lname}<br>
           Email address: ${email}           
           `
           
        };
        
        //Asynchoronous operation (who don't know how long this will take to execute)
        sgMail.send(msg)
        .then(()=>{
            res.redirect("/dashboard"); //redirect to particular path 
        })                
        .catch(err=>{
            console.log(`Error ${err} occured`);
        });   
    }
});

router.post("/login",(req,res)=>
{
    const errors=[];
   
    //validate input
    if(req.body.email=="")
    {
        errors.push("You must enter an Email");
    }

    if(req.body.password=="")
    {
        errors.push("You must enter password");
    }

    if(errors.length > 0) //means error occured 
    {
        res.render("general/login",{
            title:"LogIn",
            errorMessages: errors
        });
    }
    else
    {
        res.render("general/home",{
            title:"Home"
        });
    }
});

module.exports = router;
