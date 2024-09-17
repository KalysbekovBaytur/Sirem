const mongoose=require("mongoose")
const obzor=require("../schema/obzor")

module.exports.getPageObzor=async function(req,res){
        res.render("obzor.hbs")
}