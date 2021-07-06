const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRouter.js");
 
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: false }));
 
app.use("/users", userRouter);;

mongoose.connect("mongodb://127.0.0.1:27017/usersdb", { useUnifiedTopology: true }, function(err){
    if(err) return console.log(err);
    app.listen(4321, function(){
        console.log("Сервер запущен");
    });
});