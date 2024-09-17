const express= require("express")
const controllerAdd=require("../controllers/add")
const urlencodedParser = express.urlencoded({extended: false});

const routeradd = express.Router();



routeradd.get("/",controllerAdd.getCategoryAdd)
// routeradd.get("/getCategoryAdd",controllerAdd.)
// routeradd.post("/", controllerAdd.postCategoryAdd)
// routeradd.get('/get', controllerAdd.getallcategoryAdd)


// routeradd.post("/zakaz",urlencodedParser,controllerAdd.getPageAdd)




module.exports=routeradd