const bcrypt = require('bcryptjs');

postUserData = async (req,res)=>{
    const {name,email,password,phone,state,city,address,pincode} = req.body;
    if(phone.length !== 10){
        return res.status(401).json({error:'Please Enter valid Phone No'})
    }
    const passwordHash = await bcrypt.hash(password,10);
    UserData.create({name,email,password:passwordHash,phone,state,city,address,pincode})
    .then(()=>{
        res.status(200).json({message:'Successfully Registered User !!'})
    })
    .catch(()=>{res.status(500).json({error:"Failed to Registered"})})
    res.send(passwordHash)
}
module.exports = postUserData;