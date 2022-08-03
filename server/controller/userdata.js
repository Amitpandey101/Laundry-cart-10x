const bcrypt = require('bcryptjs');
const UserData = require('../models/registeredUser');


postUserData = async (req,res)=>{
    const {name,email,password,phone,state,city,address,pincode} = req.body;
  
    const passwordHash = await bcrypt.hash(password,10);
    UserData.create({name,email,password:passwordHash,phone,state,city,address,pincode})
    .then(()=>{
        res.status(200).json({message:'Successfully Registered User !!'})
    })
    .catch(()=>{res.status(500).json({error:"Failed to Registered"})})
}
module.exports = postUserData;