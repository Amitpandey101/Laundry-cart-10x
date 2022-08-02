const jwt = require("jsonwebtoken")
const OrderData = require("../models/order")
const UserData = require('../models/registeredUser');

const createorder= async (req,res)=>{
    console.log(req.body.data.data)
    console.log(req.body.headers.authorization)
    try{
        const {email} = jwt.verify(req.body.headers.authorization,process.env.SECRET_KEY)
        UserData.find({email:email}).then((userdata)=>{
         if(userdata.length){
             OrderData.create({date:req.body.data.date,email:email,order:req.body.data.order,Subtotal:req.body.data.Subtotal,Total:req.body.data.Total}).then((order)=>{
                res.json({message:'order submitted successfully!!!'})
             })
         }else{
             res.json({error:"unauthorized User"})
         }
        }) 
    }
    catch(err){
        res.json({error:"failed!"})
    }
  
}

module.exports = createorder;