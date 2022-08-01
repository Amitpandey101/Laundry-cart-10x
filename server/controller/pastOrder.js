const jwt=require("jsonwebtoken")

const OrderData=require("../models/order")


const pastorder = async (req,res)=>{
  // console.log(req.headers.authorization)
if(req.headers.authorization){
  
        try {
          const email = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
          
          OrderData.find({email: email}).then((orders)=> {
              // res.status(200).send({orders});
              res.json({orders:orders})
          })
        } catch(err) {
          // res.status(400).send("User Not Authorized")
          res.send("User Not Authorized")
        }
      } else {
         
        res.send("Missing Authorization token")
      }
        
};

module.exports=pastorder;