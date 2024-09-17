const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historyScheme = new Schema({
    time:{
        type:String
    } ,
    cost:{
        type:Number
    } 
});

module.exports=mongoose.model("history", historyScheme)