const jwt=require("jsonwebtoken")

const OrderData=require("../models/order")


const pastorder = async (req,res)=>{
if(req.headers.authorization){
        try {
          const email = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
          
          OrderData.find({email: email}).then((orders)=> {
              res.status(200).send({orders});
          })
        } catch(err) {
          res.status(400).send("User Not Authorized")
        }
      } else {
          res.status(400).send("Missing Authorization token")
      }
        
};

module.exports=pastorder;



