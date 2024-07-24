const {  admin } = require("../db/index.js");

function adminmiddleware(req,res,next){
const username = req.headers.username;
const password =req.headers.password;

admin.findOne({
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
module.exports =adminmiddleware;