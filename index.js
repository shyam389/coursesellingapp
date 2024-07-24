const express =require("express");
const app =express();
const bodyparser = require("body-parser");
const adminrouter =require("./routes/admin.js");
const userrouter = require("./routes/user.js");
app.use(bodyparser.json());
app.use("/admin",adminrouter);
app.use("/user",userrouter);
app.listen(3000);