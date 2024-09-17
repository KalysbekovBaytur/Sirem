const mongoose=require("mongoose")
const PodctgAdd=require("../schema/podcategory")


let idCCCCCC=''

module.exports.getPodctgadd=async function(req,res) {

    const id = req.params.id;
    idCCCCCC=req.params.id


    console.log('get',id)
    let allcategory=await PodctgAdd.find({idCategory:id})
    if(allcategory){
        // console.log(allcategory)
        res.render("podctgadd.hbs", {
            category:allcategory, 
            idCategory:id
        })


    }

}