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
                   const token =  jwt.sign({email:data[0].email},process.env.SECRET_KEY);
                        res.json({token,message:"Successfully Logged In with phone as ID",name:data[0].name,city:data[0].city,address:data[0].address,pincode:data[0].pincode})
                }else{
                    return res.json({message:'Incorrect password !'});
                }
            })
                
            }else{
                res.json({message:'Invalid Phone No. !!'})
            }

           
        })
    }else{
        UserData.find({email:email})
        .then((data)=>{
            if(data.length !== 0){
                bcrypt.compare(password,data[0].password)
                .then((passwordMatch)=>{
                    if(passwordMatch){
                      const token =  jwt.sign({email:data[0].email},process.env.SECRET_KEY);
                            res.json({token,message:"Successfully Logged In with email as ID",name:data[0].name,city:data[0].city,address:data[0].address,pincode:data[0].pincode});
                    }else{
                        return res.json({message:'Incorrect password !'})
                    }
                })
                
            }else{
                return res.json({message:'Invalid Email !!'})
            }
        })
    }
   
}
module.exports = loginAuth;