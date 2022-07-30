const jwt=require("jsonwebtoken")
const UserData = require('../models/registeredUser');
const OrderModel=require("../models/pastOrder")


const pastorder = async (req,res)=>{
if(req.headers.authorization){
        try {
          const email = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
          
          OrderModel.find({email: email}).then((orders)=> {
              res.status(200).json({orders});
          })
        } catch(err) {
          res.status(400).send("User Not Authorized")
        }
      } else {
          res.status(400).send("Missing Authorization token")
      }
        
};

module.exports=pastorder;



