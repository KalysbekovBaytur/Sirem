const mongoose=require("mongoose")
const analytics=require("../schema/analytics")

module.exports.getPageAnalytics=async function(req,res){
        res.render("analytics.hbs")
}