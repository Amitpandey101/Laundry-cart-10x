const UserData = require('../models/registeredUser');

const UniqueInputAuth = (req,res,next)=>{
    console.log(req.body)
    UserData.find({email:req.body.email})
    .then((data)=>{
        console.log(data)
        if(data.length !== 0 ){
           return res.status(401).json({error:'Email has Already registered'})
        }else{
            UserData.find({phone:req.body.phone}).then((data)=>{
                if(data.length !== 0){
                   return res.status(401).json({error:'phone no. already registered'})
                }else{
                    next();
                }
            })
        }
    })
}
module.exports = UniqueInputAuth;