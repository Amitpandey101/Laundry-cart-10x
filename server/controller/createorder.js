const jwt = require("jsonwebtoken")
const OrderData = require("../models/order")
const UserData = require('../models/registeredUser');

const createorder= async (req,res)=>{
    try{
        const {email} = jwt.verify(req.headers.authorization,process.env.SECRET_KEY)
        UserData.find({email:email}).then((userdata)=>{
         if(userdata.length){
             OrderData.create({date:req.body.date,totalPrice:req.body.totalPrice,totalItems:req.body.totalItems,status:req.body.status,products:req.body.productdetails,user:userdata[0].email}).then((order)=>{
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