const express= require("express")
const controllerAuth=require("../controllers/auth")
const urlencodedParser = express.urlencoded({extended: false});


const authRouter = express.Router();
authRouter.get("/login",controllerAuth.getauthlogin)
authRouter.get("/registration",controllerAuth.getauthregister)
authRouter.post("/registerUser",urlencodedParser,controllerAuth.registerUser)
authRouter.post("/vxodUser",urlencodedParser,controllerAuth.vxodUser)

module.exports=authRouter