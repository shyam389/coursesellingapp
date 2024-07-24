const express =require("express");
const { admin, course } = require("../db");
const adminmiddleware = require("../middlewares/admin");
const router = express.Router();

router.post("/signup",(req,res)=>{
const username =req.body.username;
const password =req.body.password;
    admin.create({
        username:username,
        password:password
    }).then(()=>{
        res.json({
            msg:"admin created succesfully"
        })
    })
})

router.post("/courses",adminmiddleware,async (req,res)=>{
const title = req.body.title;
const description = req.body.description;
const imagelink = req.body.imagelink;
const price = req.body.price;

const newcourse = await course.create({
    title,
    description,
    imagelink,
    price
})
res.json({
    msg:"course succesfully created",
    courseid:newcourse._id
})
})
router.get("/courses",adminmiddleware,async (req,res)=>{
   const courses = await course.find({

    })
    res.json({
        courses :courses
    })
})

module.exports =router;