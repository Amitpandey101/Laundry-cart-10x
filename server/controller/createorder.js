const jwt = require("jsonwebtoken")
const OrderData = require("../models/order")
const UserData = require('../models/registeredUser');

const createorder= async (req,res)=>{
    console.log(req.body)
    console.log(req.headers.authorization)
    const {date,order,Subtotal,Total} = req.body;
    try{
        const {email} = jwt.verify(req.headers.authorization,process.env.SECRET_KEY)
        UserData.find({email:email}).then((userdata)=>{
         if(userdata.length){
            console.log(req.body)
             OrderData.create({date:date,email:userdata[0].email,order:order,Subtotal:Subtotal,Total:Total}).then((order)=>{
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