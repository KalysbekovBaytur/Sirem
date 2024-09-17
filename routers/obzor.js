const express= require("express")
const controllerObzor=require("../controllers/obzor")
const urlencodedParser = express.urlencoded({extended: false});

const routerobzor = express.Router();


routerobzor.get("/",controllerObzor.getPageObzor)


module.exports=routerobzor