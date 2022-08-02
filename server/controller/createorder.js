const jwt = require("jsonwebtoken")
const OrderData = require("../models/order")
const UserData = require('../models/registeredUser');

const createorder= async (req,res)=>{
    const {date,order,Subtotal,Total,totalItem} = req.body;
    try{
        const {email} = jwt.verify(req.headers.authorization,process.env.SECRET_KEY)
        UserData.find({email:email}).then((userdata)=>{
         if(userdata.length){
            
             OrderData.create({date:date,email:userdata[0].email,order:order,Subtotal:Subtotal,Total:Total,totalItem:totalItem}).then((order)=>{
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