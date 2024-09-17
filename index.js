const express = require("express");
const hbs=require("hbs")
const path=require("path")
const authRouter=require("./routers/auth")
const routerCategory=require("./routers/category")
const routerpodCategory=require("./routers/podcategory")
const routerAdd=require("./routers/add")
const routerHistory=require("./routers/history")
const routerAnalytics=require("./routers/analytics")
const routerObzor=require("./routers/obzor")
const routerPodctgAdd=require("./routers/podctgadd")
const mongoose=require("mongoose");
const { urlencoded } = require("body-parser");
const app=express();
// const urlencodedParser = express.urlencoded({extended: false}); 

app.use(express.json()); 

// calyzbecovbaytur1110
// Dol84fv8Qell4Rfd
mongoose.connect("mongodb+srv://calyzbecovbaytur1110:Dol84fv8Qell4Rfd@sirem.eo1hg.mongodb.net/").then(()=>{
    console.log("bdconnect")
}).catch(err=>{
    console.log("bderr", err)
})


app.use(express.static(__dirname + "/static"));


app.use("/auth", authRouter);
app.use("/api/category", routerCategory);
app.use("/api/podcategory", routerpodCategory);
app.use("/api/add", routerAdd);
app.use("/api/add/getAll", routerAdd);
app.use("/api/history", routerHistory);
app.use("/api/analytics", routerAnalytics);
app.use("/api/obzor", routerObzor);
app.use("/api/podctgadd", routerPodctgAdd);

app.get("/", function(request, response){
    response.redirect("/auth/login")
});



app.listen(3000, function(){
    console.log("Сервер запущен")
})

