const jwt = require('jsonwebtoken');

const Auth = (req,res,next)=>{
    const token = req.headers.authorization;
    const verify = jwt.verify(token,process.env.SECRET_KEY);
    res.json({verify})
       next()
}
module.exports = Auth;