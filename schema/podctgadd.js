const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PodctgaddScheme = new Schema({
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
module.exports=mongoose.model("podcategoriesadd", PodctgaddScheme)