const mongoose=require("mongoose")
const PodCategory=require("../schema/podcategory")


let idCCCCCC=''

module.exports.getpodCategory=async function(req,res) {

    const id = req.params.id;
    idCCCCCC=req.params.id


    console.log('get',id)
    let allcategory=await PodCategory.find({idCategory:id})
    if(allcategory){
        // console.log(allcategory)
        res.render("podcategory.hbs", {
            category:allcategory, 
            idCategory:id
        })


    }

}


module.exports.addpodCategory=async function(req,res) {
    console.log('ggg',req.params.id)
         const podCategory = new PodCategory({ 
            idCategory: req.body.Idc,
            name: req.body.position,
            cost: req.body.cost
        });
        try {
             
        await podCategory.save();
        res.redirect('/api/podcategory/'+req.body.Idc )
            
        } catch (error) {
            console.log("err")
        }
    }
  module.exports.deletepodCategory=async function(req, res){
    let idpos = req.params.id
    console.log(idpos)
    const result = await PodCategory.deleteOne({_id:idpos})
   if(result.deletedCount > 0){
    res.redirect("/api/podcategory/"+idCCCCCC)


  }
}
