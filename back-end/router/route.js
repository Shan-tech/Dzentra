const routes = require("express").Router()
const user=require("../model/user")
const jwt=require("jsonwebtoken")
tok="SECRET"

function auth(req,res,next){
    console.log("in auth");
    var authhead=req.headers["authorization"]
    // var token =authhead.split()
    console.log(authhead);
    jwt.verify(authhead, tok,(err,res)=>{
        if (!err) {
            console.log(res);
            user.findOne({"_id":res.user._id}).then((data)=>{
                if(data){
                    console.log("200");
                    next()
                }
            }).catch(err=>console.log(err))
        }
        else{
            console.log("No vfy");
        }
    })
   
}

routes.post('/login',(req,res)=>{
    user.findOne({"name":req.body.name,"password":req.body.password})
    .then((data)=>{
        if(data){
            res.json({"result":"Logged in"})
            console.log(data);
            const token=jwt.sign({user:data},tok) 
            console.log({"t":token})
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
        "name":req.body.name,
        "email":req.body.email,
        "password":req.body.password
    });
    value.save()
    .then((data)=>{
       console.log("saved: ",data);
    })  
    .catch((err)=>console.log(err))
    
})

routes.post('/test',auth,(req,res)=>{
    // console.log("home by auth");
    res.send("yah!")
})

 
module.exports=routes    