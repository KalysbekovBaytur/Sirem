const express= require("express")
const controllerAnalytics=require("../controllers/analytics")
const urlencodedParser = express.urlencoded({extended: false});

const routeranalytics = express.Router();


routeranalytics.get("/",controllerAnalytics.getPageAnalytics)


module.exports=routeranalytics