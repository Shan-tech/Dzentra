const routes = require("express").Router()
const user=require("../model/user")
routes.post('/login',(req,res)=>{
  
    user.findOne({"name":req.body.data.name,"password":req.body.data.password})
    .then((data)=>{
        if(data){
            res.json({"result":"Logged in"})
            res.redirect("/home")
        }
        else{
            res.json({"result":"Invalid credentials"})
        }
    })
    .catch((err)=>console.log(err))
})
routes.post('/register',(req,res)=>{
    // console.log(req.body.data);
    var value=new user({
        "name":req.body.data.name,
        "email":req.body.data.email,
        "password":req.body.data.password
    });
    value.save()
    .then((data)=>res.json({"result":"Success"}))  
    .catch((err)=>console.log(err))
    
})
module.exports=routes    