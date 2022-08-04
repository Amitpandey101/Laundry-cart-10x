const UserData = require('../models/registeredUser');


const UniqueInputAuth = (req,res,next)=>{
    UserData.find({email:req.body.email})
    .then((data)=>{
       
        if(data.length !== 0 ){
           return res.json({error:'Already registered Email'})
        }else{
            UserData.find({phone:req.body.phone}).then((data)=>{
                if(data.length !== 0){
                   return res.json({error:'Already registered Phone'})
                }else{
                    next();
                }
            })
        }
    })
}
module.exports = UniqueInputAuth;