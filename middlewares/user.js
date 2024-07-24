const {  user } = require("../db/index.js");

function usermiddleware(req,res,next){
const username = req.headers.username;
const password =req.headers.password;

user.findOne({
    username:username,
    password:password
}).then((value)=>{
    if(value){
        next();
    }else{
        res.json({
            msg:"admin doesn't exist"
        })
    }
})
}
module.exports =usermiddleware;