const express= require("express")
const controllerPodctgadd=require("../controllers/podctgadd")
const urlencodedParser = express.urlencoded({extended: false});

const routerPodctgadd = express.Router();

routerPodctgadd.get("/:id",controllerPodctgadd.getPodctgadd)

module.exports=routerPodctgadd 