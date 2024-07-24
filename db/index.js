const mongoose =require("mongoose");
mongoose.connect("mongodb+srv://shyam:shyam9439@cluster.1anajzj.mongodb.net/pwcourses?retryWrites=true&w=majority&appName=Cluster");
const userschema =new mongoose.Schema ({
    username:String,
    password:String,
    purchasedcourses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'course'
        }
    ]
});
const adminschema =new mongoose.Schema ({
    username:String,
    password:String
});
const courseschema = new mongoose.Schema({
    title:String,
    description:String,
    imagelink:String,
    price:Number
});
const user = mongoose.model('user',userschema);
const admin =mongoose.model('admin',adminschema);
const course = mongoose.model('course',courseschema);

module.exports ={
    user,
    admin,
    course
}