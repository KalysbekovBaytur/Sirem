const express= require("express")
const controllerpodCategory=require("../controllers/podcategory")
const urlencodedParser = express.urlencoded({extended: false});

const routerpodCategory = express.Router();

routerpodCategory.get("/:id",controllerpodCategory.getpodCategory)
routerpodCategory.post("/addpostpodCategory",urlencodedParser,controllerpodCategory.addpodCategory)
routerpodCategory.get("/delete/:id",controllerpodCategory.deletepodCategory)

module.exports=routerpodCategory 