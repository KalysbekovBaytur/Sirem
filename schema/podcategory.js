const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const podcategoryScheme = new Schema({
    idCategory:{
        type:String
    },  
    name:{
        type:String
    } ,
    cost:{
        type:String
    } 
});
module.exports=mongoose.model("podcategories", podcategoryScheme)