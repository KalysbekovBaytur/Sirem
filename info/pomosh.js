const express = require("express");
const hbs=require("hbs")
const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectId;
const app=express();
const client=new MongoClient("mongodb://127.0.0.1:27017/user");
const url = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(url);
app.set("view engine", "hbs");
const urlencodedParser = express.urlencoded({extended: false});
 let userName=[];
 app.get("/",async function(request, response){
    await mongoClient.connect();
    const db = mongoClient.db("user");
    const collection = db.collection("user");
  
    const result = await collection.find().toArray();
    
    // console.log(result);

    response.render("app.hbs", {
        nameVisible: result,
    })
 })

 app.get("/del/:id",async function(request, response){
    let idUser = new objectId(request.params)
    console.log(idUser)
    await mongoClient.connect();
    const db = mongoClient.db("user");
    const collection = db.collection("user");
  
    const result = await collection.deleteOne({_id:idUser})
 
   if(result.deletedCount > 0){
    response.redirect("/")

   }

 })
 app.post("/",urlencodedParser,async function(request, response){
    // console.log(request.body)
        try {
            await mongoClient.connect();
            const db = mongoClient.db("user");
            const collection = db.collection("user");
            const user = {name: request.body.name};
            const result = await collection.insertOne(user);
            console.log(result);
            response.redirect('/')
            
        }catch(err) {
            console.log(err);
        } finally {
            await mongoClient.close();
        }
    })

app.post("/update",urlencodedParser,async function(request, response){
    try {
        await mongoClient.connect();
        const db = mongoClient.db("user");
        const collection = db.collection("user");
        
        const result = await collection.findOneAndUpdate({name:request.body.curent_name} , { $set: {name:request.body.new_name }});
        console.log(result);
        response.redirect('/')

    }catch(err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
  })

app.get("/update/:id",async function(request, response){
    let idUser = new objectId(request.params)
  
    await mongoClient.connect();
    const db = mongoClient.db("user");
    const collection = db.collection("user");
    const result = await collection.findOne({_id:idUser})
      console.log(result)
    if(result){
        response.render("update.hbs", {
            updateId: result._id,
            userName: result.name
        })
    }

 })

app.listen(3000, ()=>{
    console.log("Сервак ждет пупс")
})





// const express=require("express");
// const app=express();
// const hbs=require("hbs");
// app.set("view engine", "hbs");
// const urlencodedParser = express.urlencoded({extended: false});

// let user = [];
// app.get("/", function(request, response){
//     response.render("app.hbs", {
         
//     })
// });
// app.post("/",urlencodedParser, function(request, response){
//     console.log(request.body)
//     user.push(request.body.name, request.body.email);
//     response.redirect('/')
// });


// let FIO=[];
// app.get("/fio", function(request, response){
//     response.render('app.hbs',{
//         secondnameVisible: user,
//     })
// })
// app.post("/fio", urlencodedParser, function(request,response){
//     console.log(request.body)
//     user.push(request.body.name2, request.body.secondname)
//     response.redirect('/fio')
// })
// app.listen(3000, ()=>{
//     console.log("Сервер уже ждет");
// })


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="app.css">
// </head>
// <body>
//     <div class="all">
        
//         <form action="/" method="post">
//             <div class="head"> <p>О себе</p></div>
//         <div class="first">
//             Ваш имя: <input type="text" name="name">
//         </div>
//         <div class="second">
//             Ваше e-mail: <input type="text" name="email">
//         </div>
//         <div class="send">
//             <input type="submit">
//         </div>
//         </form>
//         <div class="user">
//             <ul>
//             {{#each emailsVisible}}
//                 <li>{{this}}</li>
//             {{/each}}
//             </ul>
//         </div>
//     </div>
//     <div class="all2">
        
//         <form action="/fio" method="post">
//             <div class="head2"> <p>О себе</p></div>
//         <div class="first2">
//             Ваш имя: <input type="text" name="name2">
//         </div>
//         <div class="second2">
//             Ваша Фамилия: <input type="text" name="secondname">
//         </div>
//         <div class="send2">
//             <input type="submit">
//         </div>
//         </form>
//         <div class="user2">
//             <ul>
//             {{#each secondnameVisible}}
//                 <li>{{this}}</li>
//             {{/each}}
//             </ul>
//         </div>
//     </div>
//     <script src="app.js"></script>
// </body>
// </html>