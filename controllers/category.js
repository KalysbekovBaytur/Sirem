const mongoose=require("mongoose")
const Category=require("../schema/category")
module.exports.getCategory=async function(req,res) {
    let allcategory=await Category.find({})
    if(allcategory){
        res.render("katalog.hbs", {
            category:allcategory
        })


    }

}
module.exports.addCategory=async function(req,res) {
         const category = new Category({ 
            name: req.body.kategory
        });
        
        await category.save();
        res.redirect('/api/category')
}

module.exports.updateCategory=async function(request, response){
    const id = request.params.id;
    const result = await Category.findOne({_id:id})
    if(result){
        response.render("update.hbs",{
            categoryId:result._id,
            categoryName:result.name
        })
    }
  }
  module.exports.setupdateCategory=async function(request, response){
    const result = await Category.findOneAndUpdate({_id: request.body.Id}, { $set: {name: request.body.new_nameCategory}});
    if(result){
        response.redirect("/api/category")
    }
   
  }
  module.exports.deleteCategory=async function(req, res){
    let idUser = req.params.id
    const result = await Category.deleteOne({_id:idUser})
   if(result.deletedCount > 0){
    res.redirect("/api/category")
  }}
// module.exports.podCategory=async function(req, res){
//     const id = request.params.id;
//     const result = await Category.findOne({_id:id})
//         response.render("podcategory.hbs")
//   }