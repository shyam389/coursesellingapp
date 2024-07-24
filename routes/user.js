const express =require("express");
const { course, user } = require("../db");
const usermiddleware = require("../middlewares/user");
const router = express.Router();
router.post("/signup",async(req,res)=>{
    const username = req.body.username;
    const password =req.body.password;
   const newuser =await user.create({
    username,
    password
    })
    res.json({
        msg:"user created"
    })
})


router.get("/courses",async(req,res)=>{
   const allcourses =await course.find({});
   res.json({
    courses :allcourses
   })
})
router.post("/courses/:courseid",usermiddleware,(req,res)=>{
    const username = req.headers.username;
    const courseid = req.params.courseid;
    user.updateOne({
        username:username
    },
{
    "$push":{
        purchasedcourses:courseid
    }
}).then(()=>{
    res.json({
        msg:"course purchased"
    })
})
})
router.post("/coursepurchased",usermiddleware,async (req,res)=>{
const username= req.headers.username;
const currentuser =await user.findOne({
    username:username
})
const allcourses =await course.find({
    _id:{
        "$in":currentuser.purchasedcourses
    }
});
res.json({
    course:allcourses
})
})

module.exports = router;