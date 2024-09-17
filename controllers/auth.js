const mongoose=require("mongoose")
const User=require("../schema/users")
module.exports.getauthlogin=function(req,res){
    res.render("login.hbs")
}
module.exports.getauthregister=function(req,res){
    res.render("register.hbs")
}
module.exports.registerUser=async function(req,res){
    // console.log(req.body)
    const user = new User({ 
        email: req.body.email,
        password: req.body.password
    });
    await user.save();
    console.log("Добавили")

    res.render("register.hbs",{
        message:"Аккаунт добавлен!"
    })
}

module.exports.vxodUser=async function(req,res){
    console.log(req.body)
    const condidat = await User.findOne({email: req.body.email, password: req.body.password});
    if (condidat){
        res.redirect("/api/category")
    }else{
        res.render("login.hbs", {
            message: "Логин или пароль неверен"
        })


    }

}