const jwt = require('jsonwebtoken');
const UserData = require('../models/registeredUser');
const bcrypt = require('bcryptjs');

const loginAuth = async (req,res,next)=>{
    const {phone,email,password} = req.body;
    
    if(phone){
        if(phone.length !== 10){
            return res.status(401).json({error:'Please Enter Valid Phone No'})
        }
        UserData.find({phone:phone})
        .then((data)=>{
            if(data.length !== 0){
            bcrypt.compare(password,data[0].password )
            .then((passwordMatch)=>{
                if(passwordMatch){
                   const token =  jwt.sign(phone,process.env.SECRET_KEY);
                        res.status(200).json({token,message:"Successfully Logged In with phone as ID"})
                }else{
                    return res.status(401).json({message:'Incorrect password !'});
                }
            })
                
            }else{
                res.status(401).json({message:'Invalid Phone No. !!'})
            }

           
        })
    }else{
        UserData.find({email:email})
        .then((data)=>{
            if(data.length !== 0){
                bcrypt.compare(password,data[0].password)
                .then((passwordMatch)=>{
                    if(passwordMatch){
                      const token =  jwt.sign(email,process.env.SECRET_KEY);
                            res.status(200).json({token,message:"Successfully Logged In with email as ID"});
                    }else{
                        return res.status(401).json({message:'Incorrect password !'})
                    }
                })
                
            }else{
                return res.status(401).json({message:'Invalid Email !!'})
            }
        })
    }
   
}
module.exports = loginAuth;