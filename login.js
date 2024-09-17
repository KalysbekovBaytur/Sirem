const express = require("express");
const hbs=require("hbs")
const authRouter=require("./routers/auth")
const mongoose=require("mongoose")
const app=express();

mongoose.connect("mongodb://localhost:27017/sirem").then(()=>{
    console.log("bdconnect")
}).catch(err=>{
    console.log("bderr", err)
})
app.use(express.static(__dirname + "/static"));
app.use("/auth", authRouter);