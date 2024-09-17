const express= require("express")
const controllerCategory=require("../controllers/category.js")
const urlencodedParser = express.urlencoded({extended: false});


const routerCategory = express.Router();
routerCategory.get("/",controllerCategory.getCategory)
routerCategory.post("/addCategory",urlencodedParser,controllerCategory.addCategory)
routerCategory.get("/update/:id",controllerCategory.updateCategory)
routerCategory.post("/update",urlencodedParser,controllerCategory.setupdateCategory)
routerCategory.get("/delete/:id",controllerCategory.deleteCategory)
// routerCategory.post("/podCategory/:id",controllerCategory.podCategory)

module.exports=routerCategory 
