const mongoose=require("mongoose")
const Category=require("../schema/category")
const Add=require("../schema/add")

module.exports.getPageAdd=async function(req,res){
        res.render("add.hbs")
}
module.exports.getCategoryAdd=async function(req,res) {
        let allcategoryadd=await Category.find({})
        if(allcategoryadd){
            res.render("add.hbs", {
                category:allcategoryadd
            })
            console.log(allcategoryadd)
            
        }
    }

// module.exports.postCategoryAdd=async function(req, res){
   
//     const item = new Add({
//         choise : req.body.choise,
//         cost : req.body.cost
//     })
   
//     try {
//     const new_item = await item.save()
//     return res.status(201).json(item)
//     } catch(err) {
//         return res.status(404)
//     }
// }

// module.exports.getallcategoryAdd=async function(req, res){
//     console.log(await add.find())
//  }