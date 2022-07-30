const express = require('express')
const router = express.Router();

const signUpAuth = require('../controller/signupauth');
const loginAuth = require('../controller/loginauth')
const userdata = require('../controller/userdata');
const authorization = require('../controller/authorization');




router.post('/register',signUpAuth, userdata)

router.post('/login',loginAuth)





router.get('/',(req,res)=>{
    res.send("Welcome to Base Page")
})

module.exports = router;