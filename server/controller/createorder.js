const jwt = require("jsonwebtoken")
const OrderData = require("../models/order")
const UserData = require('../models/registeredUser');

const createorder= async (req,res)=>{
    try{
        const {email} = jwt.verify(req.headers.authorization,process.env.SECRET_KEY)
        UserData.find({email:email}).then((userdata)=>{
         if(userdata.length){
             OrderData.create({Shirts:req.body.Shirts,Tshirts:req.body.Tshirts,Trousers:req.body.Trousers,Jeans:req.body.Jeans,Boxers:req.body.Boxers,Joggers:req.body.Joggers,Others:req.body.Others,user:userdata[0].email}).then((order)=>{
          res.send({"status":"order submitted","data":{"body":order}})
             })
         }else{
             res.status(400).send({"status":"unauthorized User"})
         }
        }) 
    }
    catch(err){
        res.status(400).send({"status":"unauthorized User"})
    }
  
}

module.exports = createorder;