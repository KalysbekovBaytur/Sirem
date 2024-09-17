const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addScheme = new Schema({
    choise:{
        type:String
    } ,
    cost:{
        type:String
    } 
});

module.exports=mongoose.model("adds", addScheme) 