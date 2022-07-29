const jwt = require('jsonwebtoken');

const Auth = (req,res,next)=>{
    console.log(req.headers.authorization)
    const token = req.headers.authorization;
    const verify = jwt.verify(token,process.env.SECRET_KEY);
    console.log(verify);
    res.json({verify})
       next()
}
module.exports = Auth;