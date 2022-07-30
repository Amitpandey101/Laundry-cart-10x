const express = require('express')
const router = express.Router();

const signUpAuth = require('../controller/signupauth');
const loginAuth = require('../controller/loginauth')
const userdata = require('../controller/userdata');
const authorization = require('../controller/authorization');
const pastorder=require("../controller/pastorder")




router.post('/register',signUpAuth, userdata)

router.post('/login',loginAuth)

router.get('/userdata',authorization)

router.get('/',(req,res)=>{
    res.send("Welcome to Base Page")
})

router.get("/pastorder",pastorder)

module.exports = router;