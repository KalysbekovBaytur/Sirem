const express= require("express")
const controllerHistory=require("../controllers/history")
const urlencodedParser = express.urlencoded({extended: false});

const routerhistory = express.Router();


routerhistory.get("/",controllerHistory.getPageHistory)
routerhistory.post("/",controllerHistory.setHistory)


module.exports=routerhistory