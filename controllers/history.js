const mongoose=require("mongoose")
const History=require("../schema/history")

module.exports.getPageHistory=async function(req,res){
    const history_all = await History.find({});
        res.render("history.hbs", {
                hidtoryAll: history_all
        })
}
module.exports.setHistory=async function(req,res){
      
        let add_history=new History({
                time: req.body.time,
                cost: req.body.cost
        })
        await add_history.save()
        res.json({
                message: true
        })
}